import React, { useContext, useState } from 'react';

import { TEXTS } from 'logic/texts';
import { formatFullDate } from 'logic/format';
import { Modal } from 'components/Modal';
import { PeriodManager } from 'components/PeriodManager';
import { PeriodContext } from 'contexts/PeriodContext';

import logoSVG from 'assets/img/logo.svg';
import { Container, Content, Logo, Title, Period } from './styles';

export function Header() {
  const [openedModal, setOpenedModal] = useState(false);
  const { period, ready } = useContext(PeriodContext);
  const { min, max } = period;
  const minFormated = formatFullDate(min);
  const maxFormated = formatFullDate(max);

  function closeModal() {
    setOpenedModal(false);
  }

  function openModal() {
    setOpenedModal(true);
  }

  return (
    <Container>
      <Content>
        <Title as="h1">{TEXTS.title}</Title>
        <Logo src={logoSVG} alt={TEXTS.header.logoAlt} />
        {ready && (
          <Period
            as="button"
            onClick={openModal}
            title={TEXTS.header.periodTitle}
            dark
          >
            {TEXTS.header.periodButtonContent(minFormated, maxFormated)}
          </Period>
        )}
      </Content>
      <Modal opened={openedModal} close={closeModal}>
        <PeriodManager />
      </Modal>
    </Container>
  );
}

export default Header;
