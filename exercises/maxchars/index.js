// Given a string, return the character that is the most commonly used

// Examples
// AAvsdssssssss = s
//Hello = l

function maxChar(str) {
  let obj = {};

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  objKeys = Object.keys(obj);

  let max = 0;
  let maxChar = "";
  for (let key of objKeys) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("asdasdhaksdhkajsdhjkhhhhhhhhhhhhhhhhhh"));
