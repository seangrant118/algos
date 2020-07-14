// Queue

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (el) {
    collection.push(el);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (el) {
    if (this.isEmpty()) {
      collection.push(el);
    } else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        if (el[1] < collection[i][1]) {
          collection.splice(i, o, el);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(el);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
