function intReverse(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

console.log(intReverse(12345));
