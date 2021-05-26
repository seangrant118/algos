function sumOddFib(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }
    curr += prev;
    prev = curr + prev;
  }

  return result;
}

function sumOddFib2(num) {
  if (num <= 0) return 0;

  const arrFib = [1, 1];
  let nextFib = 0;

  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}
