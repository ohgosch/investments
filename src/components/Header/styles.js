import styled, { css } from 'styled-components';

import { tabletDesktop, mobile } from 'visual/medias';
import { HiddenElement } from 'visual/styles/HiddenElement';
import { Wrapper } from 'visual/styles/Wrapper';
import { Input } from 'visual/styles/Input';
import { pxToRem } from 'logic/pxToRem';

import iconCalendar from 'assets/img/icon-calendar.svg';

export const Container = styled.header``;

export const Content = styled(Wrapper)`
  height: ${pxToRem(100)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(HiddenElement)``;

export const Logo = styled.img`
  ${tabletDesktop(css`
    max-height: ${pxToRem(30)};
  `)}

  ${mobile(css`
    max-height: ${pxToRem(20)};
  `)}
`;

export const Period = styled(Input)`
  ${mobile(css`
    font-size: 0;
    background-image: url(${iconCalendar});
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${pxToRem(15)} auto;
    width: ${pxToRem(40)};
  `)}
`;
