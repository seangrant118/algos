//Take a chunked array and flatten it

function flattenArray(arrays) {
  return arrays.reduce((a, b) => a.concat(b));
}

function flattenArray2(arrays) {
  return [].concat.apply([], arrays);
}

function flattenArray3(arrays) {
  return [].concat(...arrays);
}
