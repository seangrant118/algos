//Remove All falsy values from the array

//For loop
function bouncer(arr) {
  let result = [];

  for (let el of arr) {
    if (el) {
      result.push(el);
    }
  }
  return result;
}

bouncer([7, "ate", "", false, 9]);
