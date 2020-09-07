function fib(n) {
  let sequence = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n];
}

// recursive

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
