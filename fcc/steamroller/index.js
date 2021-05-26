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

function steamroll3(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function (v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
