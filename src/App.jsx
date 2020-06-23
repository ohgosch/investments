import React from 'react';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Main } from 'pages/Main';
import { Header } from 'components/Header';
import { PeriodProvider } from 'contexts/PeriodContext';
import { MetricsProvider } from 'contexts/MetricsContext';
import { ModalProvider } from 'contexts/ModalContext';

export function App() {
  return (
    <>
      <GlobalStyle />
      <PeriodProvider>
        <MetricsProvider>
          <ModalProvider>
            <Header />
            <Main />
          </ModalProvider>
        </MetricsProvider>
      </PeriodProvider>
    </>
  );
}

export default App;
