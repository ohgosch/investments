import React from 'react';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Main } from 'pages/Main';
import { Header } from 'components/Header';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
