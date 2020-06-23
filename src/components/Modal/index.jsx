import React from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from 'logic/texts';

import { Container, Content, Close, CloseOverlay } from './styles';

export function Modal({ children, close, opened }) {
  const tabIndex = opened ? 0 : -1;

  return (
    <Container opened={opened} aria-hidden={!opened} role="dialog">
      {/* Button overlay for close the modal */}
      <CloseOverlay onClick={close} tabIndex={tabIndex}>
        {TEXTS.modal.close}
      </CloseOverlay>

      <Content>
        <Close
          id="period-modal"
          title={TEXTS.modal.close}
          onClick={close}
          tabIndex={tabIndex}
        />
        {opened && children}
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
