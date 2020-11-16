// new Set()
// set.add('pizza')
// set.add('burger')
// set. add ('pizza') not added

//Insertion order not stored
//Element access via method
//Iterable
//Length adjusts dynamically
//No duplicates allowed
//Deletion and finding elements is fast
//Mixed data allowed

const ids = new Set();

ids.add("abc");
ids.add(1);
ids.add("bb2");
ids.add(1);

for (const el of ids) {
  console.log(el);
}

//abc
//1
//bb2

console.log(ids[1]); // undefined
console.log(ids.has(1)); // true

ids.delete("bb2");
