export const getDateDetails = (data, event) => {
  const generateArr1 =
    event.nativeEvent.target.parentElement.className.split("highlight-");
  const generateArr2 = event.target.className.split("highlight-");
  const getColor = generateArr2[1] || generateArr1[1];
  if (generateArr2[1] !== undefined || generateArr1[1] !== undefined)
    alert(`Color:  ${getColor} \nDay: ${data.getDate()}`);
};
