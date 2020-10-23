const insertionSort = function (array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }
  return array;
};
