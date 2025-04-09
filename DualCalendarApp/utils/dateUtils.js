import moment from 'moment-hijri';

export const convertToHijri = (date) => {
  return moment(date).iHijri();
};

export const convertToGregorian = (hijriDate) => {
  return moment().iHijri(hijriDate.year, hijriDate.month, hijriDate.day).toDate();
};

export const formatHijriDate = (date) => {
  return moment(date).format('iD iMMMM iYYYY');
};

export const formatGregorianDate = (date) => {
  return moment(date).format('DD MMMM YYYY');
};

export const getCurrentHijriMonth = () => {
  return moment().iMonth() + 1; // Adding 1 because months are 0-indexed
};

export const getCurrentHijriYear = () => {
  return moment().iYear();
};
