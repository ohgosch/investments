import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { PeriodContext } from 'contexts/PeriodContext';
import { MetricsContext } from 'contexts/MetricsContext';

import { getPeriodLast3Months, haveDataLast3Months } from 'logic/periodHelper';
import { Preset } from '../styles';

export function PresetLast3Months() {
  const { metrics } = useContext(MetricsContext);
  const { period, updatePeriod } = useContext(PeriodContext);
  const { min, max } = period;
  const { last3Months } = TEXTS.header.periodModal.presets;
  const { min: minPreset, max: maxPreset } = getPeriodLast3Months();

  const disabled = !haveDataLast3Months(metrics);
  const isSelected = min === minPreset && max === maxPreset;

  function clickHandler() {
    if (isSelected) return;
    updatePeriod({ min: minPreset, max: maxPreset });
  }

  return (
    <Preset onClick={clickHandler} selected={isSelected} disabled={disabled}>
      {last3Months}
    </Preset>
  );
}

export default PresetLast3Months;
