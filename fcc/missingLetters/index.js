function missingLetters(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }

  return undefined;
}

function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function (letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
