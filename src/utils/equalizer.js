export const equalizer = (date1, date2) => {
  const isTruthly =
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth();
  return isTruthly;
};
