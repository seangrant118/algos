//Arrays

//Insertion order is kept
//Element access via index
//Iterable
//Size (length) adjusts dynamically
//Dupicate values allowed
//Mix types
//Deletion and finding can require extra work

const names = ["sean", "david", "grant", "sean"];
console.log(names[1]); // david

for (const el of names) {
  console.log(el);
}
//sean
//david
//grant
//sean

console.log(names.length); //4
names.push("julie");
console.log(names.length); //5

const julieIndex = names.findIndex((el) => el === "julie");

names.splice(2, 1); // removes grant
