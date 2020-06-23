import styled, { css } from 'styled-components';

import { Input } from 'visual/styles/Input';
import { tabletDesktop } from 'visual/medias';

export const Container = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  ${tabletDesktop(css`
    grid-template-columns: 1fr 1fr;
  `)}
`;

export const DateWrapper = styled.div`
  display: grid;
`;

export const Date = styled(Input)`
  padding-right: 10px;
`;
