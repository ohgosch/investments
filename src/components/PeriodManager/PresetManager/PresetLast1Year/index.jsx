import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { PeriodContext } from 'contexts/PeriodContext';
import { MetricsContext } from 'contexts/MetricsContext';

import { getPeriodLast1Year, haveDataLast1Year } from 'logic/periodHelper';
import { getMinDate } from 'logic/dateHelper';
import { checkSelected } from '../helpers';
import { Preset } from '../styles';

export function PresetLast1Year() {
  const { metrics } = useContext(MetricsContext);
  const { period, updatePeriod } = useContext(PeriodContext);
  const { min, max } = period;
  const { last1Year } = TEXTS.header.periodModal.presets;
  const { min: minPreset, max: maxPreset } = getPeriodLast1Year();
  const minRule = getMinDate(metrics);

  const isDisabled = !haveDataLast1Year(metrics) || minPreset < minRule;
  const isSelected = checkSelected(min, max, minPreset, maxPreset);

  function clickHandler() {
    if (isSelected) return;
    updatePeriod({ min: minPreset, max: maxPreset });
  }

  return (
    <Preset onClick={clickHandler} selected={isSelected} disabled={isDisabled}>
      {last1Year}
    </Preset>
  );
}

export default PresetLast1Year;
