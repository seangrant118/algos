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

//commit
