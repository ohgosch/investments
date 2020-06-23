import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { MetricProp } from 'logic/propTypes/ChartProp';
import { getByLargerAmount, getBySmallerAmount } from 'logic/metricsHelper';
import { formatFullDate, formatChartAmount } from 'logic/format';
import { PeriodContext } from 'contexts/PeriodContext';

import { Container } from './styles';

export function ChartTable({ metrics }) {
  const { period } = useContext(PeriodContext);
  const { min, max } = period;
  const { table } = TEXTS.main;
  const minFormatted = formatFullDate(min);
  const maxFormatted = formatFullDate(max);
  const larger = getByLargerAmount(metrics);
  const smaller = getBySmallerAmount(metrics);

  const summary = table.summary(
    formatFullDate(larger[0]),
    formatChartAmount(larger[1]),
    formatFullDate(smaller[0]),
    formatChartAmount(smaller[1]),
  );

  return (
    <Container>
      <table summary={summary}>
        <caption>{table.caption(minFormatted, maxFormatted)}</caption>
        <tbody>
          <tr>
            <th scope="col">{table.date}</th>
            <th scope="col">{table.amount}</th>
          </tr>
          {metrics.map(([timestamp, amount]) => (
            <tr key={timestamp}>
              <td>{formatFullDate(timestamp)}</td>
              <td>{formatChartAmount(amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

ChartTable.propTypes = {
  metrics: MetricProp.isRequired,
};

export default ChartTable;
