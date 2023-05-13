const roundNumber = (num: number) => {
  if (!num) return null;
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const convertKelvinToCelsius = (val: number) => {
  if (!val) return null;
  return roundNumber(val - 273.15);
};

export const upperCaseString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  // value === NaN ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value === '') ||
  (Array.isArray(value) && value.length === 0);

export const isNumeric = (num: any) => {
  return !isNaN(num);
};
