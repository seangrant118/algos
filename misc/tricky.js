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
