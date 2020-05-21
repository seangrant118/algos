// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n, row = 0, step = "") {
  if (row === n) {
    return;
  }

  if (n * 2 - 1 === step.length) {
    console.log("'" + step + "'");
    return pyramid(n, row + 1);
  }

  if (row + 1 === n) {
    step += "#";
    return pyramid(n, row, step);
  }

  const midpoint = Math.floor((2 * n + 1) / 2);

  if (midpoint - row <= step.length + 1 && midpoint + row >= step.length + 1) {
    step += "#";
    pyramid(n, row, step);
  } else {
    step += " ";
    pyramid(n, row, step);
  }
}

function pyramid2(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let floor = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        floor += "#";
      } else {
        floor += " ";
      }
    }
    console.log("'" + floor + "'");
  }
}

pyramid(3);
