// Given a string, return a new string with the reversed order of characters

// Examples ---
// reverse('apple') === leppa
// reverse('hello') === 'olleh

function reverse1(str) {
  // turn str into arr, reverse, join
  return str.split("").reverse().join("");
}

function reverse2(str) {
  // declare temp variable
  let reversed = "";

  // iterate through str
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverse3(str) {
  return (
    str
      // turn str to array
      .split("")
      .reduce((reversed, character) => character + reversed, "")
  );
}

//testing
console.log(reverse1("hello"));
console.log(reverse2("fish"));
console.log(reverse3("apple"));
