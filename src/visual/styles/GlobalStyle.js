import { createGlobalStyle } from 'styled-components';

import { COLORS } from 'visual/constants';
import { Poppins } from 'visual/fonts';

export const GlobalStyle = createGlobalStyle`
  ${Poppins}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.dark};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
