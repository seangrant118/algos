//Maps

//ordered key value pairs of data
//element access via key
//iterable
//keys are unique, values are not
//keys can be anything (including reference values like arrays)
//pure data storage, optimized for data access

const resultData = new Map();

resultData.set("average", 1.53);
resultData.set("lastResult", undefined);

const country = { name: "USA", population: 330 };

resultData.set(country, 0.89);

for (const el of resultData) {
  console.log(el);
}

//['average', 1.53]
//[lastResult, undefined]
//[{name: "USA", population: 330}, 0.89]

resultData.set("average", 33.89); //overwrites previous average

console.log(resultData.get("average")); // 33.89
console.log(resultData.average); // undefined

resultData.delete(country); //removes country obj
