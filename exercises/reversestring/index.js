// Given a string, return a new string with the reversed order of characters

// Examples ---
// reverse('apple') === leppa
// reverse('hello') === 'olleh

function reverse1(str) {
  // turns the string into an array
  const arr = str.split("");

  //reverses array using built in array.reverse method
  arr.reverse();

  return arr.join("");
}

//testing
console.log(reverse1("hello"));
