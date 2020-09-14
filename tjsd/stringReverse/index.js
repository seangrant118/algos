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
