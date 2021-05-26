function steamRoll(arr) {
  const flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //recursively flatten arrays and push to flat

      flattened.push(steamRoll(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

function steamroll2(arr) {
  const flat = [].concat(...arr);

  return flat.some(Array.isArray) ? steamroll2(flat) : flat;
}
