// Given an array and chunk size, divide the array into many subarrays where each subarray is of length given

function chunk(arr, s) {
  const chunked = [];
  let chunk = [];

  while (arr.length > 0) {
    if (chunk.length < s) {
      chunk.push(arr.shift());
    } else if ((chunk.length = s)) {
      chunked.push(chunk);
      chunk = [];
    }
  }
  chunked.push(chunk);
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
