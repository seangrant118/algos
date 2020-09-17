function firstNonRepeatingChar(str) {
  let len = str.length;
  let char;
  let charCount = {};

  for (let i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

    for (let j in charCount) {
      if (charCount[j] == 1) {
        return j;
      }
    }
  }
}
