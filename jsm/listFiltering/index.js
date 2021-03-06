//Given a string, replace every letter with its position in the alphabet

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter + 1))
    .join(" ");
};

const alphabetPosition2 = (text) =>
  text
    .toUpperCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(" ");
