function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });

  // if multiple words
  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length;
  });

  // check if more than one array

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}
