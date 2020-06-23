import React, { useMemo } from 'react';
import { Chart as ChartLib } from 'react-charts';

import { MetricProp } from 'logic/propTypes/ChartProp';

import { seriesChart, axesChart, dataChart } from './settings';

export function Chart({ metrics }) {
  const series = useMemo(seriesChart, []);

  const axes = useMemo(axesChart, []);

  const data = useMemo(dataChart(metrics), [metrics]);

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
