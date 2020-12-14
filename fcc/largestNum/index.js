function largestOfFOur(arr) {
  var maxes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let tempMax = arr[i][0];
      let currentEl = arr[i][j];

      if (currentEl >= tempMax) {
        tempMax = currentEl;
      }
    }
    maxes.push(tempMax);
  }
  return maxes;
}

function largestOfFOur2(arr) {
  var maxes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr[i].length; j++) {
      let currentEl = arr[i][j];
      if ((currentEl = arr[i][j])) {
        maxes[i] = currentEl;
      }
    }
  }
  return maxes;
}

largestOfFOur([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 859, 1],
]);
