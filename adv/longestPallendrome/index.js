var longestPalindrome = function (str) {
  var arr = str.split("");
  var longest = 1;
  var firstTime = true;

  var inner = function (letters) {
    if (letters.slice(0).reverse().join() === letters.join()) {
      longest = Math.max(letters.length, longest);
      return;
    } else if (firstTime === false) {
      return;
    }
    firstTime = false;
    arr.forEach(function (letter, i) {
      var temp = [letter];
      arr.slice(i + 1).forEach(function (innerLetter) {
        temp.push(innerLetter);
        inner(temp);
      });
    });
  };

  inner(arr.slice(0));
  return longest;
};
