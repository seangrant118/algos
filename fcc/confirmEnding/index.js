function confirmEnding(str, target) {
  if (str.endsWith(target)) {
    return true;
  }

  return false;
}

function confirmEnding2(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Sean", "n");
