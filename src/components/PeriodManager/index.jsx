import React from 'react';

import { TEXTS } from 'logic/texts';
import { ManualManager } from 'components/PeriodManager/ManualManager';

import { Container, Title } from './styles';

export function PeriodManager() {
  return (
    <Container>
      <Title>{TEXTS.header.periodModal.title}</Title>
      <ManualManager />
    </Container>
  );
}

export default PeriodManager;
