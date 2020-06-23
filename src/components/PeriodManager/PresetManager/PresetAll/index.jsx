import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { PeriodContext } from 'contexts/PeriodContext';
import { MetricsContext } from 'contexts/MetricsContext';
import { getMinDate, getMaxDate } from 'logic/dateHelper';

import { checkSelected } from '../helpers';
import { Preset } from '../styles';

export function PresetAll() {
  const { metrics } = useContext(MetricsContext);
  const { period, updatePeriod } = useContext(PeriodContext);
  const { min, max } = period;
  const { all } = TEXTS.header.periodModal.presets;
  const minRule = getMinDate(metrics);
  const maxRule = getMaxDate(metrics);

  const isSelected = checkSelected(min, max, minRule, maxRule);

  function clickHandler() {
    if (isSelected) return;
    updatePeriod({ min: minRule, max: maxRule });
  }

  return (
    <Preset onClick={clickHandler} selected={isSelected}>
      {all}
    </Preset>
  );
}

export default PresetAll;
