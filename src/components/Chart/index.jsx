import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartLib } from 'react-charts';

import { ChartProp } from 'logic/propTypes/ChartProp';
import { formatChartAmount, formatChartDate } from 'logic/format';

export function Chart({ data }) {
  const series = useMemo(
    () => ({
      type: 'area',
    }),
    [],
  );

  const axes = useMemo(
    () => [
      {
        primary: true,
        position: 'bottom',
        type: 'ordinal',
        format: formatChartDate,
      },
      {
        position: 'right',
        type: 'linear',
        stacked: true,
        format: formatChartAmount,
      },
    ],
    [],
  );
  return (
    <>
      <ChartLib data={data} series={series} axes={axes} tooltip dark />
    </>
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ChartProp)).isRequired,
};

export default Chart;
