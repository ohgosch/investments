import React from 'react';

import { PresetAll } from './PresetAll';
import { PresetLast30Days } from './PresetLast30Days';
import { Container } from './styles';

export function PresetManager() {
  return (
    <Container>
      <PresetAll />
      <PresetLast30Days />
    </Container>
  );
}

export default PresetManager;
