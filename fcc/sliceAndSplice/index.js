//Slice and Splice
//You are given two arrays and an index.

//Copy each element of the first array into the second array, in order.

//Begin inserting elements at index n of the second array.

//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // create a shallow version of the array using .slice() without modifying arr2
  let localArr = arr2.slice();

  // loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // take the local version of arr2 and add arr1[i] to the nth index while deleting 0 entries in the array
    localArr.splice(n, 0, arr1[i]);
    // increment n so that the next item goes to the next index
    n++;
  }

  //return the local array
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
