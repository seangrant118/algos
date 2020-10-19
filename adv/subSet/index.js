// are all the values in the input array are in the second array?

const arrChecker = function (arr1, arr2) {
  arr1.every((val) => arr2.indexOf(val) !== -1);
};
