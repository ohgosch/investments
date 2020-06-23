import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { PeriodContext } from 'contexts/PeriodContext';

import logoSVG from 'assets/img/logo.svg';
import { formatFullDate } from 'logic/format';
import { Container, Content, Logo, Title, Period } from './styles';

export function Header() {
  const { period, ready } = useContext(PeriodContext);
  const { min, max } = period;
  const minFormated = formatFullDate(min);
  const maxFormated = formatFullDate(max);

  return (
    <Container>
      <Content>
        <Title>{TEXTS.title}</Title>
        <Logo src={logoSVG} alt={TEXTS.header.logoAlt} />
        {ready && (
          <Period as="button" title={TEXTS.header.periodTitle} dark>
            {TEXTS.header.periodButtonContent(minFormated, maxFormated)}
          </Period>
        )}
      </Content>
    </Container>
  );
}

export default Header;
