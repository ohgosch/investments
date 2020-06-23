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
  const [loaded, setLoaded] = useState(false);

  const fetch = useCallback(async () => {
    setLoaded(false);
    const { data } = await getMetrics();
    setMetrics(data);
    setLoaded(true);
    setPeriodDefault(data);
  }, [setPeriodDefault]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const publicValue = {
    fetch,
    metrics,
    loaded,
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
