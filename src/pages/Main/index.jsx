import React, { useContext } from 'react';

import { Chart } from 'components/Chart';
import { ChartTable } from 'components/ChartTable';
import { MetricsContext } from 'contexts/MetricsContext';
import { PeriodContext } from 'contexts/PeriodContext';
import { filterByPeriod } from 'logic/filter';
import { TEXTS } from 'logic/texts';
import { Container, Content, ChartWrapper, Title } from './styles';

export function Main() {
  const { metrics } = useContext(MetricsContext);
  const { ready, period } = useContext(PeriodContext);
  const { min, max } = period;

  const canRenderChart = !!metrics.length && ready;
  const metricsFiltered = filterByPeriod(metrics, min, max);
  return (
    <Container>
      <Title as="h2">{TEXTS.main.title}</Title>
      <Content>
        <ChartTable metrics={metricsFiltered} />
        <ChartWrapper>
          {canRenderChart && <Chart metrics={metricsFiltered} />}
        </ChartWrapper>
      </Content>
    </Container>
  );
}

export default Main;
