//Return the remaining elements of an array after chopping off n elements

function slasher(arr, n) {
  arr.splice(0, n);
  return arr;
}
