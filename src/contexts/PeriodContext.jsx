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

  /**
   * Update state and storage
   *
   * @param {Object} period value
   * @param {Number} period.min
   * @param {Number} period.max
   */
  function setGlobalPeriod(value) {
    setPeriod(value);
    setPeriodInStorage(value);
  }

  /**
   * Update min period
   * @param {Number} min
   */
  function updateMin(min) {
    setGlobalPeriod({ ...period, min });
  }

  /**
   * Update max period
   * @param {Number} max
   */
  function updateMax(max) {
    setGlobalPeriod({ ...period, max });
  }

  // Called when MetricsContext finish fetch
  const setPeriodDefault = useCallback(
    (data) => {
      const { min, max } = period;

      // If is not storaged
      if (!min && !max) {
        const minRule = getMinDate(data);
        const maxRule = getMaxDate(data);
        setGlobalPeriod({ min: minRule, max: maxRule });
      }
      setReady(true);
    },
    [period],
  );

  // Object to value
  const publicValue = {
    updateMin,
    updateMax,
    updatePeriod: setGlobalPeriod,
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
