import React from 'react';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Main } from 'pages/Main';
import { Header } from 'components/Header';
import { PeriodProvider } from 'contexts/PeriodContext';
import { MetricsProvider } from 'contexts/MetricsContext';

export function App() {
  return (
    <>
      <GlobalStyle />
      <PeriodProvider>
        <MetricsProvider>
          <Header />
          <Main />
        </MetricsProvider>
      </PeriodProvider>
    </>
  );
}

export default App;
