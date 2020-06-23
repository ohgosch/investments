import moment from 'moment';

import { getMinDate, getMaxDate } from 'logic/dateHelper';
import { filterByLast30Days, filterByLast3Months, filterByLast1Year, filterByLast2Years } from './metricsHelper';

export function getPeriodLast30Days(data) {
  const max = moment(new Date()).valueOf();
  const min = moment(max).subtract(30, 'day').valueOf();

  return { min, max };
}

export function getPeriodLast3Months(data) {
  const max = moment(new Date()).valueOf();
  const min = moment(max).subtract(3, 'month').valueOf();

  return { min, max };
}

export function getPeriodLast1Year(data) {
  const max = moment(new Date()).valueOf();
  const min = moment(max).subtract(1, 'year').valueOf();

  return { min, max };
}

export function getPeriodLast2Years(data) {
  const max = moment(new Date()).valueOf();
  const min = moment(max).subtract(2, 'year').valueOf();

  return { min, max };
}


export function haveDataLast30Days(data) {
  const filtered = filterByLast30Days(data);
  return filtered.length;
}

export function haveDataLast3Months(data) {
  const filtered = filterByLast3Months(data);
  return filtered.length;
}

export function haveDataLast1Year(data) {
  const filtered = filterByLast1Year(data);
  return filtered.length;
}

export function haveDataLast2Years(data) {
  const filtered = filterByLast2Years(data);
  return filtered.length;
}

export function getBetterPeriod(data) {
  if (haveDataLast30Days(data)) return getPeriodLast30Days(data);
  if (haveDataLast3Months(data)) return getPeriodLast3Months(data);
  if (haveDataLast1Year(data)) return getPeriodLast1Year(data);
  if (haveDataLast2Years(data)) return getPeriodLast2Years(data);

  const min = getMinDate(data);
  const max = getMaxDate(data);

  return { min, max };
}
