// string letters, return the character that is not repeated

function noRepeat(str) {
  let arr = str.split("");
  let obj = {};
  let answer;
  const minIndex = arr.length;

  arr.forEach((letter, index) => {
    if (!obj[letter]) {
      obj[letter] = [index, true];
    } else if (obj[letter]) {
      obj[letter] = false;
    }
  });
  for (var key in obj) {
    if (!obj[key]) {
    } else {
      if (obj[key][0] < minIndex) {
        answer = key;
        minIndex = obj[key][0];
      }
    }
  }
  return answer;
}
