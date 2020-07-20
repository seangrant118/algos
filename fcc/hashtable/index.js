// Hash Table

var hash = (str, max) => {
  var hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash % max;
};
