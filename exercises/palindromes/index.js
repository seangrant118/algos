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

console.log(myPallindrome("abba"));
console.log(myPallindrome("hello"));
