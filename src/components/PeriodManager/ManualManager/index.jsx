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

  function minHandler(event) {
    const { value } = event.target;
    const valueTimestamp = inputToTimestamp(value);

    if (valueTimestamp < minRule) return updateMin(minRule);
    return updateMin(valueTimestamp);
  }

  function maxHandler(event) {
    const { value } = event.target;
    const valueTimestamp = inputToTimestamp(value);

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
        />
      </DateWrapper>
    </Container>
  );
}

export default ManualManager;
