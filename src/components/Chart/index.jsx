import React, { useMemo } from 'react';
import { Chart as ChartLib } from 'react-charts';

import { MetricProp } from 'logic/propTypes/ChartProp';
import { formatChartAmount, formatChartDate } from 'logic/format';

export function Chart({ metrics }) {
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

  const data = useMemo(
    () => [
      {
        specialLabel: 'Hello World!',
        label: 'Series 1',
        data: metrics,
      },
    ],
    [metrics],
  );
  return (
    <>
      <ChartLib data={data} series={series} axes={axes} tooltip dark />
    </>
  );
}

Chart.propTypes = {
  metrics: MetricProp.isRequired,
};

export default Chart;
