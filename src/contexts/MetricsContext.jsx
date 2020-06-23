import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

import { PeriodContext } from 'contexts/PeriodContext';
import { getMetrics } from 'logic/requests/metrics';

export const MetricsContext = createContext({});

const initialState = [];

export function MetricsProvider({ children }) {
  const { setPeriodDefault } = useContext(PeriodContext);
  const [metrics, setMetrics] = useState(initialState);

  /**
   * Fetch API data
   */
  const fetch = useCallback(async () => {
    const { data } = await getMetrics();
    setMetrics(data);

    // Call period context for calc min and max rules
    setPeriodDefault(data);
  }, [setPeriodDefault]);

  // Fetch data when rendered
  useEffect(() => {
    fetch();
  }, [fetch]);

  // Object to value
  const publicValue = {
    fetch,
    metrics,
  };

  return (
    <MetricsContext.Provider value={publicValue}>
      {children}
    </MetricsContext.Provider>
  );
}

MetricsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetricsProvider;
