import jsonData from "../services/JZON.json";

const defaultNotFilledDate = jsonData.date.split(".");
const green = jsonData["green"].map(
  (item) =>
    `${defaultNotFilledDate[1]},${Number(defaultNotFilledDate[0]) - 1},${item}`
);
const yellow = jsonData["yellow"].map(
  (item) =>
    `${defaultNotFilledDate[1]},${Number(defaultNotFilledDate[0]) - 1},${item}`
);
const grey = jsonData["grey"].map(
  (item) =>
    `${defaultNotFilledDate[1]},${Number(defaultNotFilledDate[0]) - 1},${item}`
);
const sortedData = [{ green }, { yellow }, { grey }];

export default sortedData;
