function missingNumber() {
  let n = arr.length;
  let sum = 0;
  let expectedSum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return expectedSum - sum;
}
