import React from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from 'logic/texts';

import { Container, Content, Close, CloseOverlay } from './styles';

export function Modal({ children, close, opened }) {
  return (
    <Container opened={opened} aria-hidden={!opened}>
      {/* Button overlay for close the modal */}
      <CloseOverlay onClick={close}>{TEXTS.modal.close}</CloseOverlay>

      <Content>
        <Close title={TEXTS.modal.close} onClick={close} />
        {children}
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  opened: PropTypes.bool,
};

Modal.defaultProps = {
  opened: false,
};
