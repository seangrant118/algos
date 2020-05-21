// Capitalize the first letter of each word in the string, then return the string

function capitalize(str) {
  const arr = str.split(" ");
  console.log(arr);
  const newArr = [];

  arr.forEach((word) => {
    newArr.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
  });

  return newArr.join(" ");
}
console.log(capitalize("capitalize this sentence"));
