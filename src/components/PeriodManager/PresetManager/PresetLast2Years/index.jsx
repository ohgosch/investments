import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { getMinDate } from 'logic/dateHelper';
import { getPeriodLast2Years, haveDataLast2Years } from 'logic/periodHelper';
import { PeriodContext } from 'contexts/PeriodContext';
import { MetricsContext } from 'contexts/MetricsContext';

import { checkSelected } from '../helpers';
import { Preset } from '../styles';

export function PresetLast2Years() {
  const { metrics } = useContext(MetricsContext);
  const { period, updatePeriod } = useContext(PeriodContext);
  const { min, max } = period;
  const { last2Years } = TEXTS.header.periodModal.presets;
  const { min: minPreset, max: maxPreset } = getPeriodLast2Years(metrics);
  const minRule = getMinDate(metrics);

  const disabled = !haveDataLast2Years(metrics) || minPreset < minRule;
  const isSelected = checkSelected(min, max, minPreset, maxPreset);

  function clickHandler() {
    if (isSelected) return;
    updatePeriod({ min: minPreset, max: maxPreset });
  }

  return (
    <Preset onClick={clickHandler} selected={isSelected} disabled={disabled}>
      {last2Years}
    </Preset>
  );
}

export default PresetLast2Years;
