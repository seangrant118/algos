//ES5

function addAll() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;

  for (i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// es6 ...rest and reduce

function addAllES6(...numbers) {
  let total = 0;
  numbers.forEach((num) => (total += num));
}
