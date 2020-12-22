function repeatStr(str, n) {
  if (num < 0) return "";

  return str.repeat(n);
}

function repeatStr2(str, n) {
  let final = "";
  if (num < 0) return "";

  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}
