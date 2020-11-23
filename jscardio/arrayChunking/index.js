function chunkArr(arr, len) {
  const chunkedArr = [];

  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, len + i));

    i += len;
  }

  return chunkedArr;
}
