const allAnagrams = function (str) {
  if (str.length === 0) return [""];
  let result = {};

  str.split("").forEach(function (letter, i) {
    let remainingLetters = str.slice(0, i) + str.slice(i + 1);
    allAnagrams(remainingLetters).forEach(function (anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};
