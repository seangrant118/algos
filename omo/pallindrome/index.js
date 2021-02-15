function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("bob"));
