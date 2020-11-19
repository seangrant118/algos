function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(" ");
}

function capitalizeLetters2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

function capitalizeLetters3(str) {
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase);
}
