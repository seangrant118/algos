//Local Croquet club has two categories of membership, senior and open. They would like your help determining which category prospective members would be placed.
// to be a senior member one must be 55 and have atleast a 7 handicap.
//Handicaps range from -2 to +26

// Example input:
// [[18, 20], [42, 2], [61, 12]]

// Example output:
// ["open", "open", "senior"]

const openOrSenior = (data) => {
  // returning an array
  return data.map((info) => {
    if (info[0].age >= 55 && info[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
};
