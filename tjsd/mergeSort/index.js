function mergeSort(a, b) {
  let merged = [];
  let elA = a[0];
  let elB = b[0];
  let i = 1;
  let j = 1;

  if (a.length == 0) {
    return b;
  }

  if (b.length == 0) {
    return a;
  }

  while (elA || elB) {
    if ((elA && !elB) || elA < elB) {
      merged.push(elA);
      elA = a[i++];
    } else {
      merged.push(elB);
      elB = b[j++];
    }
  }
  return merged;
}
