// Sets

// no duplicates, no particular order

function mySet() {
  //collection will hold the set
  let collection = [];

  // this method will check for an el and return true or false
  this.has = function (el) {
    return collection.indexOf(el) !== -1;
  };

  // this method will return all values in the set
  this.values = function () {
    return collection;
  };

  // this method will add an el to set
  this.add = function (el) {
    if (!this.has(el)) {
      collection.push(el);
      return true;
    }
    return false;
  };

  // remove an el
  this.remove = function (el) {
    if (this.has(el)) {
      index = collection.indexOf(el);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };
}
