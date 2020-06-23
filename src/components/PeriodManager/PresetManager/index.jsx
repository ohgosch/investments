import React from 'react';

import { PresetAll } from './PresetAll';
import { PresetLast30Days } from './PresetLast30Days';
import { Container } from './styles';
import { PresetLast3Months } from './PresetLast3Months';
import { PresetLast1Year } from './PresetLast1Year';
import { PresetLast2Years } from './PresetLast2Years';

export function PresetManager() {
  return (
    <Container>
      <PresetAll />
      <PresetLast30Days />
      <PresetLast3Months />
      <PresetLast1Year />
      <PresetLast2Years />
    </Container>
  );
}

export default PresetManager;
