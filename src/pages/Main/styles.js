import styled from 'styled-components';
import { Wrapper } from 'visual/styles/Wrapper';
import { COLORS } from 'visual/constants';

export const Container = styled.div``;

export const Content = styled(Wrapper)`
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 350px;

  text {
    fill: ${COLORS.white} !important;
  }
  .gridLine {
    stroke: ${COLORS.whiteAlpha('.1')} !important;
  }
`;
