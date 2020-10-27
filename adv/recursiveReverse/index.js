let apple = [4, 5, 6, 7];

const recursiveReverse = function (arr) {
  let result = [];
  let newArr = [];
  arr.forEach((item) => {
    newArr.push(item);
  });
  const inner = function (arr2) {
    if (arr2.length > 0) {
      result.push(arr2.pop());
      inner(newArr);
    }
    return;
  };
  inner(newArr);
  return result;
};
