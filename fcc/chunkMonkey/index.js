//Write a function that splits an array into groups the length of size and returns a two dimensional array

function chunkArrInGroups(arr, size) {
  var groups = [];

  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }

  return groups;
}
