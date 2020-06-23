import styled from 'styled-components';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(15)};
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: ${pxToRem(22)};
  line-height: ${pxToRem(33)};
  cursor: default;
  color: ${COLORS.dark};
`;
