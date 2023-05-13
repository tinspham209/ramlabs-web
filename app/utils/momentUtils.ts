import { format } from 'date-fns';

export const DateFormat = 'MM/DD/YYYY';
export const DateFormatWithHour = 'DD/MM/YYYY HH:mm';
export const DateFormatDisplay = 'MMMM DD, YYYY';
export const DateFormatDisplayShort = 'MMM DD, YYYY';
export const DateFormatDisplayMinute = 'MM/DD/YYYY hh:mm:ss A';

export const TimeFormat = 'HH:mm';

export const getCurrentLocaleHour = () => {
  const dateText = new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Asia/Bangkok',
  });
  return dateText;
};

export const getDateDisplay = (value: number | Date) => {
  return format(value, DateFormat);
};
