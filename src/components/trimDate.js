function trimDate(originalData, dateTrimProperty) {
  console.log(originalData);
  console.log(dateTrimProperty)
  if (!originalData) return;
  const cloneData = { ...originalData };
  const date = cloneData[dateTrimProperty];
  console.log(date);
  cloneData[dateTrimProperty] = date.split("T")[0];
  return cloneData;
}

const trimDates = (originalData, dateTrimProperty) => {
  if (!originalData) return;
  let cloneData = [...originalData];
  cloneData.forEach((singledata) => {
    let date = singledata[dateTrimProperty];
    singledata[dateTrimProperty] = date.split("T")[0];
  });
  return cloneData;
};

export { trimDate, trimDates };
