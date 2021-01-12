//Return the lowest index at which a value(2nd arg) should be inserted into an array, once the array has been sorted

function getIndexToIns(arr, num) {
  //Sort arr
  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    } else {
      return arr.length;
    }
  }
}
