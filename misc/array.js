let myArray = ["a", "b", "c", "d"];

//vjs
myArray.push("end");
myArray.unshift("start");

//es6
myArray = ["start", ...myArray, "end"];
