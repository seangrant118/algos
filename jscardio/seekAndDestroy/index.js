//IndexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filter);
}
