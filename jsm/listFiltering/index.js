//Given a string, replace every letter with its position in the alphabet
alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter + 1))
    .join("");
};
