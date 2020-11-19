function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");

  return revStr === str;
}
