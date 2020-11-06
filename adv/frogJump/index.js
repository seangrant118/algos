function frogJump(x, a) {
  let leaves = {};
  let steps = x;
  let readyToJump = [...Array(x + 1).keys()].reduce((a, b) => a + b);

  for (let i = 0; i < x; i++) {
    leaves[steps] = false;
    steps--;
  }

  for (let i = 0; i < a.length; i++) {
    if (leaves[a[i]] === false) {
      leaves[a[i]] = true;
      readyToJump -= a[i];
    }

    if (readyToJump === 0) {
      return i;
    }
  }
  return -1;
}
