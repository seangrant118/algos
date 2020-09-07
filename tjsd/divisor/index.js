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
