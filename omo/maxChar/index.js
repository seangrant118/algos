function maxChar(str) {
  let arr = str.split("");
  let obj = {};
  let max = ["", 0];

  arr.forEach((char) => {
    obj[char] = 0;
  });

  arr.forEach((char) => {
    obj[char] += 1;
    if (obj[char] > max[1]) {
      max = [char, obj[char]];
    }
  });

  return max[0];
}

console.log(maxChar("hello world"));
