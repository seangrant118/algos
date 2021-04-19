//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]

function largestOfFour(arr) {
  // initalize an array to return at the end
  let largestNums = [];
  // loop through the outer array
  for (let i = 0; i < arr.length; i++) {
    // initialize max value at - infinity so that negative numbers will be greater than inital max value
    let max = -Infinity;
    // loop through inner arrays
    for (let j = 0; j < arr[i].length; j++) {
      // if the value of j in inner array i is greater than max, set new max
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    // once the max value is determined, push it into the largest numbers array
    largestNums.push(max);
  }
  // after all the loops, return the largest numbers array
  return largestNums;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
