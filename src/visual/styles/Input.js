import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  height: ${pxToRem(40)};
  padding: 0 15px;
  font-style: normal;
  background-color: transparent;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: ${COLORS.dark};
  outline-color: ${COLORS.pink};
  border: 2px solid;

  &:focus {
    border-color: ${COLORS.pink};
  }

  ${p => p.dark && css`
    color: ${COLORS.white};
  `}
`;
