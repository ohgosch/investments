import React from 'react';

import { TEXTS } from 'logic/texts';
import { ManualManager } from 'components/PeriodManager/ManualManager';
import { PresetManager } from 'components/PeriodManager/PresetManager';

import { Container, Title } from './styles';

export function PeriodManager() {
  return (
    <Container>
      <Title>{TEXTS.header.periodModal.title}</Title>
      <ManualManager />
      <PresetManager />
    </Container>
  );
}

export default PeriodManager;
