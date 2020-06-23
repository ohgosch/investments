import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';
import { COLORS } from 'visual/constants';
import { HiddenElement } from 'visual/styles/HiddenElement';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.main`
  margin-top: ${pxToRem(50)};
  overflow: hidden;
`;

export const Title = styled(HiddenElement)``;

export const Content = styled(Wrapper)``;

export const ChartWrapper = styled.div`
  width: 100%;
  height: ${pxToRem(350)};
`;
