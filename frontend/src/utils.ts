export const formatNumber = (number: number, fixed = 0): string | number => {
  if (number >= 1e12) {
    return `${(number / 1e12).toFixed(fixed)}T`;
  }
  if (number >= 1e9) {
    return `${(number / 1e9).toFixed(fixed)}B`;
  }
  if (number >= 1e6) {
    return `${(number / 1e6).toFixed(fixed)}M`;
  }
  if (number >= 1e3) {
    return `${(number / 1e3).toFixed(fixed)}K`;
  }
  return Math.round(number);
};

export const getPercentage = (current: number, max: number, allowOver?: boolean): number => {
  const percentage = Math.floor((current / max) * 100);
  if (allowOver) {
    return percentage;
  }
  return Math.min(percentage, 100);
};
