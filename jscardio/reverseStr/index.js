//Reverse a string

//Return a string in reverse

function reverseString(str) {
  let reverse = [];
  for (letter of str) {
    reverse.unshift(letter);
  }
  return reverse.join("");
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }

  return reverse;
}

function reverseString4(str) {
  let reverse = "";
  for (let i = 0; i <= str.length - 1; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}

function reverseString5(str) {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }

  return reverse;
}

function reverseString6(str) {
  let reverse = "";
  str.split("").forEach((char) => {
    reverse = char + reverse;
  });

  return reverse;
}

function reverseStr7(str) {
  return str.split("").reduce((reverse, char) => {
    return char + reverse;
  });
}
