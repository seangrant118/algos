function reverseInt(int) {
  const revStr = int.toString().split("").reverse().join("");

  return parseInt(revStr) * Math.sign(int);
}
