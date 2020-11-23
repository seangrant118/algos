function chunkArr(arr, len) {
  const chunkedArr = [];

  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, len + i));

    i += len;
  }

  return chunkedArr;
}

function chunkArr2(arr, len) {
  const chunkedArr = [];

  arr.forEach(function (val) {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}
