//Given strings return the longest common prefix

function lcp(strs) {
  let pre = "";
  if (strs.length === 0) return pre;

  for (let i = 0; i < str[0].length; i++) {
    const char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) return pre;
    }
    pre = pre + char;
  }
  return pre;
}
