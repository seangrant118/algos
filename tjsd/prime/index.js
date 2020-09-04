function isPrime(n) {
  let divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

// Better

function isPrime2(n) {
  let divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else if (divisor >= 3) {
      divisor + 2;
    } else {
      divisor++;
    }
  }
}
