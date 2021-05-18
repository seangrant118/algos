function myReplace(str, before, after) {
  let index = str.split(" ").indexOf(before);
  let arr = str.split(" ");

  arr[index] = after;

  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function myReplace(str, before, after) {
  let index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}
