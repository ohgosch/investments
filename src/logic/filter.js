/**
 * Filter By Period
 * 
 * @param {Array[]} data
 * @param {Number} min
 * @param {Number} max
 * @returns {Array[]}
 */
export function filterByPeriod(data, min, max) {
  const filtered = data.filter(item => {
    const date = item[0];
    if (date < min) return false;
    if (date > max) return false;
    return true;
  });
  return filtered;
}
