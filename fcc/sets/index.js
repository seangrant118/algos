// Sets

// no duplicates, no particular order

function mySet() {
  //collection will hold the set
  let collection = [];

  // this method will check for an el and return true or false
  this.has = function (el) {
    return collection.indexOf(el) !== -1;
  };
}
