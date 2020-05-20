//Check to see if two provided strigns are anagrams of one another
//ignore spaces and punctuation
// capital letters = lowercase

function anagram(strA, strB) {
  let strAL = strA.toLowerCase();
  let strBL = strB.toLowerCase();

  let smashedStrA = strAL.replace(/\s/g, "");
  let smashedStrB = strBL.replace(/\s/g, "");

  let objA = {};
  let objB = {};

  for (let el of smashedStrA) {
    objA[el] = objA[el] + 1 || 1;
  }

  for (let el of smashedStrB) {
    objB[el] = objB[el] + 1 || 1;
  }

  for (let el in objA) {
    if (objA[el] !== objB[el]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("RAIL saftey", "fairy tales"));
