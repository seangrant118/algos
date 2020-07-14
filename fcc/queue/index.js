// Queue

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (el) {
    collection.push(el);
  };
}
