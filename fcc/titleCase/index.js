function titleCase(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase + words[i].slice(1);
  }

  return words;
}

function titleCase2(str) {
  let titled = str
    .toLowerCase()
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase + el.slice(1);
    });

  return titled.join(" ");
}
