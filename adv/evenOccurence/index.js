//Even occurance
//build a counting array to count all occurences in the array

// do a for in loop to see if which are even, and push the even to an array

//use math.min to search for the lowest index number that each number in the result array is found in the original arary and return that number

const evenOccurance = function (str) {
  const arr = str.split("");
  let occurances = {};
  let first;
  let result = [];

  arr.forEach((item) => {
    if (!occurances[item]) {
      occurences[item] = 1;
      return;
    }
    occurences[item]++;
  });
  for (let key in occurances) {
    if (occurances[key] % 2 === 0) {
      result.push(key);
    }
  }
  result.forEach((item) => {
    if (first === undefined) {
      first = item;
    }
    first = arr.indexOf(item) < arr.indexOf(first) ? item : first;
  });
  return first;
};
