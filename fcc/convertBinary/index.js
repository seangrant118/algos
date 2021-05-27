function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join("");
}

function binaryAgent2(str) {
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;
      }
    }

    sentence += String.fromCharCode(decValue);

    decValue = 0;
  }

  return sentence;
}

function binaryAgent3(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function (char) {
      return parseInt(char, 2);
    })
  );
}
