import styled from 'styled-components';
import { Input } from 'visual/styles/Input';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
`;

export const DateWrapper = styled.div`
  display: grid;
`;

export const Date = styled(Input)`
  padding-right: 10px;
`;
