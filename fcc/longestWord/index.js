//Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let longest = 0;

  let stringToArray = str.split(" ");

  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].length > longest) {
      longest = stringToArray[i].length;
    }
  }

  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
