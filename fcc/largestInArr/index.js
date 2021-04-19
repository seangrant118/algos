function largestOfFour(arr) {
  let largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    largestNums.push(max);
  }
  console.log(largestNums);
  return largestNums;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
