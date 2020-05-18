// Given a string, return a new string with the reversed order of characters

// Examples ---
// reverse('apple') === leppa
// reverse('hello') === 'olleh

function reverse1(str) {
  // turn str into arr, reverse, join
  return str.split("").reverse().join("");
}

//testing
console.log(reverse1("hello"));
