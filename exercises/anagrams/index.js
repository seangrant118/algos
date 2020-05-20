//Check to see if two provided strigns are anagrams of one another
//ignore spaces and punctuation
// capital letters = lowercase

function anagram(strA, strB) {
  let strAL = strA.toLowerCase();
  let strBL = strB.toLowerCase();

  let smashedStrA = strAL.replace(/[^\w]/g, "");
  let smashedStrB = strBL.replace(/[^\w]/g, "");

  console.log(smashedStrB);
  console.log(smashedStrA);

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

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  return true;
}

function anagram2(a, b) {
  const builtA = buildCharMap(a);
  const builtB = buildCharMap(b);

  if (Object.keys(builtA).length !== Object.keys(builtB).length) {
    return false;
  }

  for (let char in builtB) {
    if (builtB[char] !== builtA[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// console.log(anagram("RAIL saftey!", "fairy tales"));
console.log(anagram2("RAIL saftey!", "fairy tales"));
