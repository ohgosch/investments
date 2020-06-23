import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getMinDate, getMaxDate } from 'logic/dateHelper';

const storageKey = 'PERIOD';

const getPeriodByStorage = () => JSON.parse(localStorage.getItem(storageKey));

const setPeriodInStorage = (value) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const PeriodContext = createContext({});

const initialState = {
  min: undefined,
  max: undefined,
  ...getPeriodByStorage(),
};

export function PeriodProvider({ children }) {
  const [period, setPeriod] = useState(initialState);
  const [ready, setReady] = useState(false);

  function setGlobalPeriod(value) {
    setPeriod(value);
    setPeriodInStorage(value);
  }

  function updateMin(value) {
    setGlobalPeriod({ ...period, min: value });
  }

  function updateMax(value) {
    setGlobalPeriod({ ...period, max: value });
  }

  const setPeriodDefault = useCallback(
    (data) => {
      const { min, max } = period;

      if (!min && !max) {
        const minRule = getMinDate(data);
        const maxRule = getMaxDate(data);
        setGlobalPeriod({ min: minRule, max: maxRule });
      }
      setReady(true);
    },
    [period],
  );

  const publicValue = {
    updateMin,
    updateMax,
    setPeriodDefault,
    period,
    ready,
  };

  return (
    <PeriodContext.Provider value={publicValue}>
      {children}
    </PeriodContext.Provider>
  );
}

PeriodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PeriodProvider;
