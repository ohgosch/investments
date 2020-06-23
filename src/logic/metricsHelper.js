import { getPeriodLast30Days, getPeriodLast3Months, getPeriodLast1Year, getPeriodLast2Years } from 'logic/periodHelper';

/**
 * Filter by Period
 * 
 * @param {Array[]} data 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Array[]}
 */
function filterByPeriod(data, min, max) {
  const filtered = data.filter(([timestamp]) => {
    if (timestamp < min) return false;
    if (timestamp > max) return false;
    return true;
  });

  return filtered;
}

/**
 * Filter by Last 30 Days
 * 
 * @param {Array[]} data 
 * @returns {Array[]}
 */
export function filterByLast30Days(data) {
  const { min, max } = getPeriodLast30Days(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}

/**
 * Filter by Last 3 Months
 * 
 * @param {Array} data 
 * @returns {Array[]}
 */
export function filterByLast3Months(data) {
  const { min, max } = getPeriodLast3Months(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}

/**
 * Filter by Last 1 Year
 * 
 * @param {Array[]} data 
 * @returns {Array[]}
 */
export function filterByLast1Year(data) {
  const { min, max } = getPeriodLast1Year(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}

/**
 * Filter by Last 2 Years
 * 
 * @param {Array[]} data 
 * @returns {Array[]}
 */
export function filterByLast2Years(data) {
  const { min, max } = getPeriodLast2Years(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}
