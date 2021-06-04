function addTogether() {
  function checkNum(num) {
    return typeof num === "number";
  }

  if (arguments.length === 2) {
    let first = arguments[0];
    let second = arguments[1];
    if (checkNum(first) && checkNum(second)) {
      return first + second;
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    let first = arguments[0];
    if (checkNum(first)) {
      function addSecond(second) {
        if (checkNum(second)) {
          return first + second;
        } else {
          return undefined;
        }
      }
      return addSecond;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

function addTogether2() {
  const [first, second] = Object.values(arguments);
  // Check first argument
  if (typeof first !== "number") {
    return undefined;
  }

  // Function to add second argument
  const addSecond = (second) =>
    typeof second === "number" ? first + second : undefined;

  // Check second argument
  if (second !== undefined) {
    return addSecond(second);
  } else {
    return addSecond;
  }
}

function addTogether3() {
  var args = Array.from(arguments);
  return args.some((n) => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : (n) => (typeof n === "number" ? n + args[0] : undefined);
}
