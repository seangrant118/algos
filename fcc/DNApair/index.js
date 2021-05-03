function pairElement(str) {
  let paired = [];

  let search = function (char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

function pairElement2(str) {
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}
