// Capitalize the first letter of each word in the string, then return the string

// Soulution 1 -----------------------------------------------------

function capitalize(str) {
  const arr = str.split(" ");
  const newArr = [];

  arr.forEach((word) => {
    newArr.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
  });

  return newArr.join(" ");
}

// Soulution 2 -----------------------------------------------------

function capitalize2(str) {
  const arr = str.split(" ");
  const newArr = [];

  arr.forEach((word) => {
    newArr.push(word[0].toUpperCase() + word.slice(1));
  });

  return newArr.join(" ");
}

// Soulution 3 -----------------------------------------------------
function capitalize3(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

// Soulution 4 -----------------------------------------------------
function capitalize4(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(capitalize4("capitalize this sentence"));
