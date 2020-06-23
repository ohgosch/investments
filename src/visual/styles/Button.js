import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  padding: 0 15px;
  font-style: normal;
  background-color: ${COLORS.dark};
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: ${COLORS.dark};
  border: 2px solid;
	color: ${COLORS.white};

  ${p => p.selected && css`
    background-color: ${COLORS.pink};
  `}
	
	&:disabled {
		opacity: 0.5;
	}
`;
