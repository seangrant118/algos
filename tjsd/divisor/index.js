function greatestCommonDivisor(a, b) {
  let divisor = 2;
  let greatestDivisor = 1;

  // neg
  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b & (divisor == 0)) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

// Fancy

function greatestCommonDivisor2(a, b) {
  if (b == 0) {
    return a;
  } else {
    return greatestCommonDivisor2(b, a % b);
  }
}
