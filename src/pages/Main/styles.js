import styled from 'styled-components';
import { Wrapper } from 'visual/styles/Wrapper';
import { COLORS } from 'visual/constants';
import { HiddenElement } from 'visual/styles/HiddenElement';

export const Container = styled.main`
  margin-top: 50px;
`;

export const Title = styled(HiddenElement)``;

export const Content = styled(Wrapper)``;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;

  text {
    fill: ${COLORS.white} !important;
  }
  .gridLine {
    stroke: ${COLORS.whiteAlpha('.1')} !important;
  }
`;
