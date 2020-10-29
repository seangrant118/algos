const equilib = function (array) {
  let length = array.length;
  let left = array[0];
  let right =
    array.reduce(function (a, b) {
      return a + b;
    }) - array[0];
  let minDifference = Math.abs(left - right);

  for (let i = 1; i < length - 1; i++) {
    left += array[i];
    right -= array[i];
    let distance = Math.abs(left - right);
    if (distance < minDifference) {
      minDifference = distance;
    }
  }
  return minDifference;
};
