import moment from 'moment';

import { DATES } from 'logic/constants';

import {
  filterByLast30Days,
  filterByLast3Months,
  filterByLast1Year,
  filterByLast2Years,
} from './metricsHelper';
import { getMaxDate } from './dateHelper';

/**
 * Get Period of Last 30 Days
 * 
 * @param {Array[]} data 
 * @returns {Object} period
 */
export function getPeriodLast30Days(data) {
  const max = getMaxDate(data);
  const min = +moment(max).subtract(30, 'day').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Get Period of Last 3 Months
 * 
 * @param {Array[]} data 
 * @returns {Object} period
 */
export function getPeriodLast3Months(data) {
  const max = getMaxDate(data);
  const min = +moment(max).subtract(3, 'month').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Get Period of Last 1 Year
 * 
 * @param {Array[]} data 
 * @returns {Object} period
 */
export function getPeriodLast1Year(data) {
  const max = getMaxDate(data);
  const min = +moment(max).subtract(1, 'year').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Get Period of Last 2 Years
 * 
 * @param {Array[]} data 
 * @returns {Object} period
 */
export function getPeriodLast2Years(data) {
  const max = getMaxDate(data);
  const min = +moment(max).subtract(2, 'year').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Have Data of Last 30 Days
 * 
 * @param {Array[]} data 
 * @returns {Boolean}
 */
export function haveDataLast30Days(data) {
  const filtered = filterByLast30Days(data);
  return !!filtered.length;
}

/**
 * Have Data of Last 3 Months
 * 
 * @param {Array[]} data 
 * @returns {Boolean}
 */
export function haveDataLast3Months(data) {
  const filtered = filterByLast3Months(data);
  return !!filtered.length;
}

/**
 * Have Data of Last 1 Year
 * 
 * @param {Array[]} data 
 * @returns {Boolean}
 */
export function haveDataLast1Year(data) {
  const filtered = filterByLast1Year(data);
  return !!filtered.length;
}

/**
 * Have Data of Last 2 Years
 * 
 * @param {Array[]} data 
 * @returns {Boolean}
 */
export function haveDataLast2Years(data) {
  const filtered = filterByLast2Years(data);
  return !!filtered.length;
}
