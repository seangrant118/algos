// return true if the string in the first el of the array contains all of the letters of the second str

function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) < 0) {
      return false;
    }
  }
  return true;
}
