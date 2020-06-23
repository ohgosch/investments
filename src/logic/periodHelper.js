import moment from 'moment';

import { DATES } from 'logic/constants';

import {
  filterByLast30Days,
  filterByLast3Months,
  filterByLast1Year,
  filterByLast2Years,
} from './metricsHelper';

/**
 * Get timestamp of Now
 * 
 * @returns {Number}
 */
function getNow() {
  const date = moment(new Date());
  date.hours(0);
  date.minutes(0);
  date.seconds(0);
  date.millisecond(0);

  return +date.format(DATES.TIMESTAMP);
}

/**
 * Get Period of Last 30 Days
 * 
 * @returns {Object} period
 */
export function getPeriodLast30Days() {
  const max = getNow();
  const min = +moment(max).subtract(30, 'day').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Get Period of Last 3 Months
 * 
 * @returns {Object} period
 */
export function getPeriodLast3Months() {
  const max = getNow();
  const min = +moment(max).subtract(3, 'month').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Get Period of Last 1 Year
 * 
 * @returns {Object} period
 */
export function getPeriodLast1Year() {
  const max = getNow();
  const min = +moment(max).subtract(1, 'year').format(DATES.TIMESTAMP);

  return { min, max };
}

/**
 * Get Period of Last 2 Years
 * 
 * @returns {Object} period
 */
export function getPeriodLast2Years() {
  const max = getNow();
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
