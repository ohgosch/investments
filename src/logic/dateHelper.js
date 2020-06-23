export function getDatesByData(data) {
  return data.map(item => item[0]);
}

export function getMinDate(data) {
  const dates = getDatesByData(data);
  let min;
  dates.forEach(date => {
    if (!min) return min = date;
    if (date < min) min = date;
  });
  return min;
};

export function getMaxDate(data) {
  const dates = getDatesByData(data);
  let max = 0;
  dates.forEach(date => {
    if (date > max) max = date;
  });
  return max;
}
