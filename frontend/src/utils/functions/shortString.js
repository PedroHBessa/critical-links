export const shortString = (string) => {
  if (string.length > 12) {
    const result = string.substring(0, 12) + "...";
    return result;
  }
  return string;
};
