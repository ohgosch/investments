import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(21)};
  padding-bottom: ${pxToRem(2)};
  color: ${COLORS.dark};
`;
