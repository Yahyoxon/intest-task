import sortedData from "./data-modifier";
import { equalizer } from "./equalizer";

export const HightlightClass = (date, view) => {
  let colorClass = "";
  sortedData?.forEach((item) => {
    if (item?.green?.find((d) => equalizer(new Date(d), date))) {
      colorClass = "highlight-green";
    }
    if (item?.yellow?.find((d) => equalizer(new Date(d), date)))
      colorClass = "highlight-yellow";

    if (item?.grey?.find((d) => equalizer(new Date(d), date)))
      colorClass = "highlight-grey";
  });
  return colorClass;
};
