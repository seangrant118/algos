function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60, 30], 50);
