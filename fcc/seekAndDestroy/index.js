function destroyer(arr) {
  const args = Array.from(arguments).splice(0, 1);
  result = [];

  for (let num of arr) {
    if (args.indexOf(num) === -1) {
      result.push(num);
    }
  }

  return result;
}

// filter
function destroyer2(arr) {
  const args = Array.from(arguments).splice(0, 1);
  result = [];

  return arr.filter(function (num) {
    return args.indexOf(num) === -1;
  });
}

destroyer([1, 2, 3, 4, 5], 2, 3); // returns [1,4,5]
