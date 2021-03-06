function destroyer(arr) {
  const args = Array.from(arguments).slice(1);
  result = [];

  for (let num of arr) {
    if (args.indexOf(num) === -1) {
      result.push(num);
    }
  }

  console.log(result);

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

// single line

function destroyer3(arr, ...valsToRemove) {
  return arr.filter((el) => !valsToRemove.includes(el));
}
console.log(destroyer3([1, 2, 3, 4, 5], 2, 3)); // returns [1,4,5]
