// Easy

function reverse(str) {
  var rtnStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rtnStr += str[i];
  }
  return rtnStr;
}

// non concat

function reverse(str) {
  var reversed = [];

  if (!str || typeof str != "string" || str.length < 2) return str;

  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
}

// recursion

function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substr(1) + str.charAt(0));
  }
}

// build in js methods

function reverse(str) {
  if (!str || str.length < 2) return str;

  return str.split("").reverse().join("");
}
