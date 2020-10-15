const largestProductOfThree = (arr) => {
  arr
    .sort((a, b) => a - b)
    .slice(arr.length - 3)
    .reduce((a, b) => a * b);
};
