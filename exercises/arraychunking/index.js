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

function chunk2(arr, s) {
  const chunked = [];

  for (let el of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === s) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }

  return chunked;
}

function chunk3(arr, s) {
  const chunked = [];
  let idx = 0;

  while (idx < arr.length) {
    chunked.push(arr.slice(idx, idx + s));
    idx += s;
  }

  return chunked;
}

console.log(chunk3([1, 2, 3, 4, 5, 6, 7, 8], 3));
