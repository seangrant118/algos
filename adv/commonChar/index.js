const commonCharacters = function (str1, str2) {
  const one = str1.replace(/ /g, "");
  const two = str1.replace(/ /g, "");

  let result = [];

  for (let i = 0; i < one.length; i++) {
    if (two.indexOf(one[i]) !== -1 && result.indexOf(one[i]) === -1) {
      result.puush(one[i]);
    }
  }
  return result.join("");
};
