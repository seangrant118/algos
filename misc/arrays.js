//
// Remove Duplicates
//

//Brute force
//n^2
let a = [1, 2, 5, 2, 1, 8];

let b = [];
let len = a.length;

for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

// SOrt and REmove
// n+n
a.sort();
let _temp;

for (let i = 0; i < len; i++) {
  if (a[i] !== _temp) {
    b.push(a[i]);
    _temp = a[i];
  }
}

//Obj
//n

let obj = {};

for (let i of a) {
  obj[i] = true;
}

let b = Object.keys(obj);
