import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { formatFullDate } from 'logic/format';
import { PeriodManager } from 'components/PeriodManager';
import { PeriodContext } from 'contexts/PeriodContext';
import { ModalContext } from 'contexts/ModalContext';

import logoSVG from 'assets/img/logo.svg';
import { Container, Content, Logo, Title, Period } from './styles';

export function Header() {
  const { period, ready } = useContext(PeriodContext);
  const { openModal } = useContext(ModalContext);
  const { min, max } = period;
  const minFormatted = formatFullDate(min);
  const maxFormatted = formatFullDate(max);

  function openModalHandler() {
    openModal(PeriodManager);
  }

  return (
    <Container>
      <Content>
        <Title as="h1">{TEXTS.title}</Title>
        <Logo src={logoSVG} alt={TEXTS.header.logoAlt} />
        {ready && (
          <Period
            as="button"
            onClick={openModalHandler}
            title={TEXTS.header.periodTitle}
            dark
          >
            {TEXTS.header.periodButtonContent(minFormatted, maxFormatted)}
          </Period>
        )}
      </Content>
    </Container>
  );
}

export default Header;
