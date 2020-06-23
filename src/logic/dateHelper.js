/**
 * Get Dates By Data
 * @param {Array[]} data 
 * @returns {Number[]} dates
 */
export function getDatesByData(data) {
  return data.map(item => item[0]);
}

/**
 * Get Min Date
 * @param {Array[]} data
 * @returns {Number} min value
 */
export function getMinDate(data) {
  const dates = getDatesByData(data);
  let min;
  dates.forEach(date => {
    if (!min) return min = date;
    if (date < min) min = date;
  });
  return min;
};

/**
 * Get Max Date
 * @param {Array[]} data 
 * @returns {Number} max value
 */
export function getMaxDate(data) {
  const dates = getDatesByData(data);
  let max = 0;
  dates.forEach(date => {
    if (date > max) max = date;
  });
  return max;
}
