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
