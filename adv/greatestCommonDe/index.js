const gcd = function (num1, num2) {
  //check which is smaller and bigger
  const smaller = Math.min(num1, num2);
  const larger = Math.max(num1, num2);

  if (larger % smaller === 0) {
    return smaller;
  } else {
    return gcd(smaller, larger % smaller);
  }
};
