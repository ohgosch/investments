import React from 'react';

import { TEXTS } from 'logic/texts';

import logoSVG from 'assets/img/logo.svg';
import { Container, Content, Logo, Title, Period } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Title>{TEXTS.title}</Title>
        <Logo src={logoSVG} alt={TEXTS.header.logoAlt} />
        <Period as="button" title={TEXTS.header.periodTitle} dark>
          {TEXTS.header.periodButtonContent('12/05/2005', '22/05/2020')}
        </Period>
      </Content>
    </Container>
  );
}

export default Header;
