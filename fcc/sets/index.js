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

  // return a union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      // wont contain duplicates
      unionSet.add(e);
    });
    return unionSet;
  };

  // return the intersections of the two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
      return intersectionSet;
    });
  };
}
