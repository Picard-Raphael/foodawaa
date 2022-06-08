export const classNames = (classList: any) => {
  return Object.keys(classList)
    .reduce((previousValue, current) => {
      if (classList[current] === true) {
        return `${previousValue} ${current}`;
      }
      return previousValue;
    }, "")
    .trim();
};
