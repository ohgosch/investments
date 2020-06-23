import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getMinDate, getMaxDate } from 'logic/dateHelper';
import { getBetterPeriod } from 'logic/periodHelper';

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
    const minRule = getMinDate();
    let setted;
    if (value > minRule) setted = { ...period, min: minRule };
    else setted = value;
    setGlobalPeriod(setted);
  }

  function updateMax(value) {
    const maxRule = getMaxDate();
    let setted;
    if (value > maxRule) setted = { ...period, max: maxRule };
    else setted = value;
    setGlobalPeriod(setted);
  }

  const setPeriodDefault = useCallback(
    (data) => {
      const { min, max } = period;

      if (!min && !max) {
        setGlobalPeriod(getBetterPeriod(data));
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
