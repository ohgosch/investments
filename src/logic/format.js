import moment from 'moment';

import { DATES } from 'logic/constants';

export function formatChartAmount(amount) {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return formatter.format(amount);
}

function getCurrentYear() {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

function isCurrentYear(year) {
  const currentYear = getCurrentYear();
  return year === currentYear;
}

export function formatChartDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();

  if (isCurrentYear(year)) {
    return moment(date).format(DATES.dateLess);
  }
  return moment(date).format(DATES.dateFull);
}

export function formatFullDate(timestamp) {
  const date = new Date(timestamp);

  return moment(date).format(DATES.dateFull);
}
