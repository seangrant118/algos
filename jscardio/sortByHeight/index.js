//Some people are standing in a row in a park. There are trees between them which cannot be moved.
//Rearrange the people by their heights in a non-descending order without movinng the trees.

//Ex: a = [-1, 150, 190, 170, -1, -1, 160, 180]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => {
    sortedArr.splice(arr1[i], 0, -1);
  });

  return sortArr;
}
