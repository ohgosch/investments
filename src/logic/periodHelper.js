import moment from 'moment';

import { getMinDate, getMaxDate } from 'logic/dateHelper';
import { DATES } from 'logic/constants';

import { filterByLast30Days, filterByLast3Months, filterByLast1Year, filterByLast2Years } from './metricsHelper';

function getNow() {
  const date = moment(new Date());
  date.hours(0);
  date.minutes(0);
  date.seconds(0);
  date.millisecond(0);

  return +date.format(DATES.TIMESTAMP);
}

export function getPeriodLast30Days() {
  const max = getNow();
  const min = +moment(max).subtract(30, 'day').format(DATES.TIMESTAMP);

  return { min, max };
}

export function getPeriodLast3Months() {
  const max = getNow();
  const min = +moment(max).subtract(3, 'month').format(DATES.TIMESTAMP);

  return { min, max };
}

export function getPeriodLast1Year() {
  const max = getNow();
  const min = +moment(max).subtract(1, 'year').format(DATES.TIMESTAMP);

  return { min, max };
}

export function getPeriodLast2Years() {
  const max = getNow();
  const min = +moment(max).subtract(2, 'year').format(DATES.TIMESTAMP);

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
