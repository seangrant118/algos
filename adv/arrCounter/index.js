const arrCounter = function (arr) {
  let counter = 0;
  let maxCount = 0;
  const inner = function (n) {
    if (!Array.isArray(n)) {
      maxCount = Math.max(maxCount, counter);
      counter = 0;
      return;
    }
    n.forEach((num) => {
      counter++;
      inner(num);
    });
  };
  inner(arr);
  return maxCount;
};
