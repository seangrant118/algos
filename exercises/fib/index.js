// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative Solution ---------------------------------------------------------
// Runetime complexity O(n)

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    let x = result[i - 1];
    let y = result[i - 2];

    result.push(x + y);
  }
  return result[n];
}

// Recursive Solution -----------------------------------------------------------

function fibR(n) {
  if (n < 2) {
    return n;
  }

  return fibR(n - 1) + fib(n - 2);
}

console.log(fibR(5));
