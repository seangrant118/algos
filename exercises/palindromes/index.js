//Given a string, return true if the string is a pallendrome, or false if it is not

function myPallindrome(str) {
  let arr = str.split("");
  let reversed = "";

  for (character of arr) {
    reversed = character + reversed;
  }
  if (reversed === str) {
    return true;
  } else return false;
}

function palindrome1(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

function palindrome2(str) {}

console.log(myPallindrome("abba"));
console.log(myPallindrome("hello"));

console.log(palindrome1("abba"));
console.log(palindrome1("hello"));

console.log(palindrome2("abba"));
console.log(palindrome2("hello"));
