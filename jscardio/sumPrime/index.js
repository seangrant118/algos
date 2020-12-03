function sumPrimes(n) {
  let total = 0;

  function checkPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      total += i;
    }
  }

  return total;
}
