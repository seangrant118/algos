function reverseStr(str) {
  let arr = str.split("");
  let newArr = [];

  for (let i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join("");
}

//optimize

function reverseStr2(str) {
  return str.split("").reverse("").join("");
}

// again

function reverseStr3(str) {
  let result = "";

  for (let char of str) {
    result = char + result;
  }

  return result;
}

console.log(reverseStr3("hello"));
