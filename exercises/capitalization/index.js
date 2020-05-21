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
console.log(capitalize2("capitalize this sentence"));
