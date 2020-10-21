//Deep Equality

//Write a function that, given two obj, returns whether or not the two are deeply equivalent, meaning the structure of the two objects is the same, and so is the structure of each of their descendents

//Do not use JSON.stringify

const deepEquality = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (var key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
  }
  for (var key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (!deepEquality(obj1[key], obj2[key])) {
        return false;
      }
    }

    if (
      (typeof obj1[key] === "object" && typeof obj2[key] !== "object") ||
      (typeof obj1[key] !== "object" && typeof obj2[key] === "object")
    ) {
      return false;
    }

    if (typeof obj1[key] !== "object" && typeof obj2[key] !== "object") {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};
