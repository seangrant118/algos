function diffArr(arr1, arr2) {
  //take in 2 arrays and return an array with unique values

  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (let j = 0; i < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}
