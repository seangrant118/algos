function mergeSort(arr) {}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else if (right[0] < left[0]) {
      results.push(right.shift());
    }
  }

  return [...results, ...right, ...left];
}
