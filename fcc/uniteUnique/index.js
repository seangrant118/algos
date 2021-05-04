function uniteUnique(arr1, arr2, arr3) {
  let finalArr = [];

  for (let i = 0; i < arguments.length; i++) {
    let arrayArgument = arguments[i];

    for (let j = 0; j < arrayArgument.length; j++) {
      let indexValue = arrayArgument[j];

      if (finalArr.indexOf(indexValue) < 0) {
        finalArr.push(indexValue);
      }
    }
  }

  return finalArr;
}

function uniteUnique2(arr1, arr2, arr3) {
  let newArr;

  let args = Array.prototype.slice.call(arguments);

  newArr = args.reduce(function (arrA, arrB) {
    return arrA.concat(
      arrB.filter(function (i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}

function uniteUnique3(arr1, arr2, arr3) {
  let args = [...arguments];
  let results = [];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!results.includes(args[i][j])) {
        results.push(args[i][j]);
      }
    }
  }

  return results;
}
