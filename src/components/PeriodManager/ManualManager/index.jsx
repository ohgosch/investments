import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { PeriodContext } from 'contexts/PeriodContext';
import { timestampToInput, inputToTimestamp } from 'logic/format';
import { MetricsContext } from 'contexts/MetricsContext';
import { getMinDate, getMaxDate } from 'logic/dateHelper';

import { Label } from 'visual/styles/Label';
import { Container, DateWrapper, Date } from './styles';

export function ManualManager() {
  const { metrics } = useContext(MetricsContext);
  const { period, updateMin, updateMax } = useContext(PeriodContext);
  const { min, max } = period;
  const minRule = getMinDate(metrics);
  const maxRule = getMaxDate(metrics);

  function minHandler({ target }) {
    const { value } = target;
    if (!value) return false;
    const valueTimestamp = inputToTimestamp(value);

    // When value is larger of max
    if (valueTimestamp >= max) return updateMin(max);

    // When value is smaller of minRule
    if (valueTimestamp < minRule) return updateMin(minRule);
    return updateMin(valueTimestamp);
  }

  function maxHandler({ target }) {
    const { value } = target;
    if (!value) return false;

    const valueTimestamp = inputToTimestamp(value);

    // When value is smaller of min
    if (valueTimestamp <= min) return updateMax(min);

    // When value is larger of maxRule
    if (valueTimestamp > maxRule) return updateMax(maxRule);
    return updateMax(valueTimestamp);
  }

  return (
    <Container>
      <DateWrapper>
        <Label htmlFor="min-date">{TEXTS.header.periodModal.min}</Label>
        <Date
          type="date"
          max={timestampToInput(max)}
          min={timestampToInput(minRule)}
          value={timestampToInput(min)}
          onChange={minHandler}
          id="min-date"
          required
        />
      </DateWrapper>
      <DateWrapper>
        <Label htmlFor="max-date">{TEXTS.header.periodModal.max}</Label>
        <Date
          type="date"
          max={timestampToInput(maxRule)}
          min={timestampToInput(min)}
          value={timestampToInput(max)}
          onChange={maxHandler}
          id="max-date"
          required
        />
      </DateWrapper>
    </Container>
  );
}

export default ManualManager;
