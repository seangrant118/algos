function repeatStr(str, n) {
  if (n < 0) return "";

  return str.repeat(n);
}

function repeatStr2(str, n) {
  let final = "";
  if (n < 0) return "";

  for (let i = 0; i < n; i++) {
    final += str;
  }
  return final;
}

//Recursion
function repeatStr3(str, n) {
  if (n < 0) return "";

  if (n === 1) return str;

  return str + repeatStr3(str, num - 1);
}
