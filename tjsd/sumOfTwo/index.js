// From an unsorted array check whether there are any two numbers that will sum a given number

function sumFinder(arr, sum) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j > len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
