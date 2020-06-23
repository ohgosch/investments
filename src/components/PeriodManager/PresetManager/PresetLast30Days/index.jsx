import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { PeriodContext } from 'contexts/PeriodContext';
import { MetricsContext } from 'contexts/MetricsContext';

import { getPeriodLast30Days, haveDataLast30Days } from 'logic/periodHelper';
import { Preset } from '../styles';

export function PresetLast30Days() {
  const { metrics } = useContext(MetricsContext);
  const { period, updatePeriod } = useContext(PeriodContext);
  const { min, max } = period;
  const { last30Days } = TEXTS.header.periodModal.presets;
  const { min: minPreset, max: maxPreset } = getPeriodLast30Days();

  const disabled = !haveDataLast30Days(metrics);
  const isSelected = min === minPreset && max === maxPreset;

  function clickHandler() {
    if (isSelected) return;
    updatePeriod({ min: minPreset, max: maxPreset });
  }

  return (
    <Preset onClick={clickHandler} selected={isSelected} disabled={disabled}>
      {last30Days}
    </Preset>
  );
}

export default PresetLast30Days;
