function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if ((i % 5 === 0) & (1 % 3 === 0)) {
      console.log("fizzbuz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}