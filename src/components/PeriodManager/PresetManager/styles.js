import styled from 'styled-components';

import { Button } from 'visual/styles/Button';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(10)};
`;

export const Preset = styled(Button)`
  width: 100%;
`;
