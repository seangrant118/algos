function sumAll(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);

  let total = 0;

  for (var i = start; i <= end; i++) {
    total += i;
  }

  return total;
}

console.log(sumAll([5, 10]));
