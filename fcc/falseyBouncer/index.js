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

// filter method

function bouncer2(arr) {
  return arr.filter((item) => {
    return item;
  });
}

bouncer([7, "ate", "", false, 9]);
