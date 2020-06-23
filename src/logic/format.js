import moment from 'moment';

import { DATES } from 'logic/constants';

/**
 * Format Amount to Currence
 * 
 * @param {Number} amount 
 * @returns {String}
 */
export function formatChartAmount(amount) {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return formatter.format(amount);
}

/**
 * Get Current Year
 * 
 * @returns {Number}
 */
function getCurrentYear() {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

/**
 * Is Current Year
 * 
 * @param {Number} year
 * @returns {Boolean}
 */
function isCurrentYear(year) {
  const currentYear = getCurrentYear();
  return year === currentYear;
}

/**
 * Format Date to Chart
 * 
 * @param {Number} timestamp
 * @returns {String}
 */
export function formatChartDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();

  if (isCurrentYear(year)) {
    return moment(date).format(DATES.dateLess);
  }
  return moment(date).format(DATES.dateFull);
}

/**
 * Format to Full Date
 * 
 * @param {Number} timestamp
 * @returns {String}
 */
export function formatFullDate(timestamp) {
  const date = new Date(timestamp);

  return moment(date).format(DATES.dateFull);
}

/**
 * Format to Input pattern
 * 
 * @param {Number} timestamp
 * @returns {String}
 */
export function timestampToInput(timestamp) {
  const date = moment(timestamp);
  const formatted = date.format(DATES.INPUT);

  return formatted;
}

/**
 * Format input pattern to timestamp
 * 
 * @param {String} value 
 * @returns {Number}
 */
export function inputToTimestamp(value) {
  const date = moment(value, DATES.INPUT);
  const formatted = date.format(DATES.TIMESTAMP);

  return +formatted;
}
