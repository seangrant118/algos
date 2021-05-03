function myReplace(str, before, after) {
  let index = str.split(" ").indexOf(before);
  let arr = str.split(" ");

  arr[index] = after;

  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
