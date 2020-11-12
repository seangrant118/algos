function getCount(str) {
  var vowelsCount = 0;

  for (const letter of str) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

function getCount2(str) {
  let vowelsCount = 0;

  for (let letter of str) {
    if (letter.match(/[aeiou]/g)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// reduce
function getCount3(str) {
  return str
    .split("")
    .reduce((acc, letter) => (letter.match(/[aeiou]/g) ? acc + 1 : acc), 0);
}
