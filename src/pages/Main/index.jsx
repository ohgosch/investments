import React from 'react';

import { Chart } from 'components/Chart';
import { Container, Content, ChartWrapper } from './styles';

const chartData = [
  {
    specialLabel: 'Hello World!',
    label: 'Series 1',
    data: [
      [1565308800000, 24960],
      [1565568000000, 24960],
      [1565654400000, 24963.28],
      [1565740800000, 24966.55],
      [1565827200000, 24969.83],
      [1565913600000, 24973.11],
      [1566172800000, 24976.39],
      [1566259200000, 24979.67],
      [1566345600000, 24982.95],
      [1566432000000, 54866.23],
      [1566518400000, 84750.88],
      [1566777600000, 94718.26],
      [1566864000000, 114651.1],
    ],
  },
];

export function Main() {
  return (
    <Container>
      <Content>
        <ChartWrapper>
          <Chart data={chartData} />
        </ChartWrapper>
      </Content>
    </Container>
  );
}

export default Main;
