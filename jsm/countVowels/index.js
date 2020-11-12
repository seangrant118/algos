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
