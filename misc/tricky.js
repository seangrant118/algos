console.log(2 + "2"); // 22
console.log(2 - "2"); // 0

// remove dups

let nums = [1, 2, 2, 3];

let set = [...new Set(nums)];

// scoping

let func = function () {
  {
    let l = "let";
    var v = "var";
  }

  console.log(v); // var
  console.log(l); // und
};

func();

// block scoping

let func = function () {
  {
    (function () {
      let l = "let";
      var v = "var";
    })();
  }

  console.log(v);
  console.log(l);
};

//

console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false (?true > 5) (?1>5)

//

let a = () => arguments; // arguments not bound in arrow func

console.log(a("hi"));

//
let x = function () {
  return {
    message: "hi",
  };
};

console.log(x()); //undf

//
let profile = {
  name: "sean",
};

Object.seal(profile);
profile.age = 3;
profile.name = "grant";

console.log(profile); //name:grant
