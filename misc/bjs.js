let myArray = ["a", "b", "c", "d"];

//vjs
myArray.push("end");
myArray.unshift("start");

//es6
myArray = ["start", ...myArray, "end"];

// secret variable
function secretVariable() {
  var private = "sc";
  return function () {
    return private;
  };
}

var getPrivate = secretVariable();
console.log(getPrivate());

//what is the output
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner(); // 3
}
outer(); // und
