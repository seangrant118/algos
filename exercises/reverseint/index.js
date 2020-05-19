// Given an integer, return an integer that is the reverse ordering

// 15 === 51
// 199 === 991
// -21 === -12

function myReverseInt(int) {
  let str = int.toString();
  let reverse = "";
  for (char of str) {
    reverse = char + reverse;
  }
  let reverseInt = parseInt(reverse);

  if (int < 0) {
    return reverseInt * -1;
  }

  return reverseInt;
}

console.log(myReverseInt(997));
