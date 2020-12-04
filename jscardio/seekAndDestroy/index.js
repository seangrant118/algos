//IndexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);
}

function seekAndDestroy2(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}
