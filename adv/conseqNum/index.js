const conseqFinger = function (arr) {
  let result = false;

  arr.forEach(function (num, i, arr) {
    if (num < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
      result = true;
    }
  });
  return result;
};
