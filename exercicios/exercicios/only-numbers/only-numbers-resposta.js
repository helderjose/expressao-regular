export const onlyNumbers = (toTest) => {
  let pattern = /^\d+$/;
  return pattern.test(toTest);
}