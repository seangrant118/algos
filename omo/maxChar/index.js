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

// optimize

function maxChar2(str) {
  const characters = {};

  for (let char of str) {
    characters[char] = characters[char] + 1 || 1;
  }

  let maxCount = 0;
  let maxCharacter = null;

  for (let char in characters) {
    if (characters[char] > maxCount) {
      maxCount = characters[char];
      maxCharacter = char;
    }
  }

  return maxCharacter;
}

console.log(maxChar2("helloooooooo world"));
