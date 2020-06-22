import styled, { css } from 'styled-components';

import { tabletDesktop, mobile } from 'visual/medias';
import { HiddenElement } from 'visual/styles/HiddenElement';
import { Wrapper } from 'visual/styles/Wrapper';
import { Input } from 'visual/styles/Input';

import iconCalendar from 'assets/img/icon-calendar.svg';

export const Container = styled.header``;

export const Content = styled(Wrapper)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(HiddenElement)``;

export const Logo = styled.img`
  ${tabletDesktop(css`
    max-height: 30px;
  `)}

  ${mobile(css`
    max-height: 20px;
  `)}
`;

export const Period = styled(Input)`
  ${mobile(css`
    font-size: 0;
    background-image: url(${iconCalendar});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15px auto;
    width: 40px;
  `)}
`;
