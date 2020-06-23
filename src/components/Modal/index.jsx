import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from 'logic/texts';
import { ModalContext } from 'contexts/ModalContext';

import { Container, Content, Close, CloseOverlay } from './styles';

export function Modal({ children }) {
  const { closeModal } = useContext(ModalContext);

  return (
    <Container role="dialog">
      {/* Button overlay for close the modal */}
      <CloseOverlay onClick={closeModal} aria-hidden="true">
        {TEXTS.modal.close}
      </CloseOverlay>

      <Content>
        <Close title={TEXTS.modal.close} onClick={closeModal} autoFocus />
        {children}
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
