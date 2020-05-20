// Write a program that consolelogs the numbers 1 to n.
// for multiples of 3 print fizz
// for multiples of 5 print buzz
// for multiples of 3 and 5 print fizzbuzz

function fizzbuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(50);
