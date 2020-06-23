import { getPeriodLast30Days, getPeriodLast3Months, getPeriodLast1Year, getPeriodLast2Years } from 'logic/periodHelper';

function filterByPeriod(data, min, max) {
  const filtered = data.filter(([timestamp]) => {
    if (timestamp < min) return false;
    if (timestamp > max) return false;
    return true;
  });

  return filtered;
}

export function filterByLast30Days(data) {
  const { min, max } = getPeriodLast30Days(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}

export function filterByLast3Months(data) {
  const { min, max } = getPeriodLast3Months(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}

export function filterByLast1Year(data) {
  const { min, max } = getPeriodLast1Year(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}

export function filterByLast2Years(data) {
  const { min, max } = getPeriodLast2Years(data);

  const filtered = filterByPeriod(data, min, max);
  return filtered;
}
