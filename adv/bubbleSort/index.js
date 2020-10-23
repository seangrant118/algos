const bubbleSort = function (arr) {
  do {
    var swapped = false;
    arr.forEach((num, i) => {
      if (num > arr[i + 1]) {
        let temp = num;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped === true);
  return arr;
};
