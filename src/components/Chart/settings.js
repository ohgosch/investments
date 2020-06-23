import { formatChartDate, formatChartAmount } from 'logic/format';
import { TEXTS } from 'logic/texts';

export function seriesChart() {
  return {
    type: 'area',
  };
}

export function axesChart() {
  return [
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
  ];
}

export function dataChart(metrics) {
  return () => [
    {
      label: TEXTS.chart.serieTitle,
      data: metrics,
    },
  ];
}
