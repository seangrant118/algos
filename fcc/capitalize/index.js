//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let upperArr = [];
  arr.forEach((el, i) => {
    upperArr[i] = el.charAt(0).toUpperCase() + el.slice(1);
  });
  return upperArr.join(" ");
}

titleCase("I'm a little tea pot");
