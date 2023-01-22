const StringByFormatting = (source: Date): string => {
  const leftPad = (value: number) => {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  };
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(".");
};

export default StringByFormatting;
