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
