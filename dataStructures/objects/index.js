//Objects

//Can have methods attached to them, functionality to interact with key value pairs

//unordered key value pairs of data
//element access via key
//not iterable, only with for-in loop
//keys are unique, values are not
//keys have to be strings, numbers or symbols
//can store data and methods

const person = {
  firstName: "Sean",
  age: 26,
  hobbies: ["sports", "cooking"],
  greet() {
    console.log("Hi, i am" + this.firstName);
  },
};

console.log(person.firstName); //'Sean'

person.lastName = "Grant";
console.log(person.lastName); //'Grant'

delete person.age;

console.log(person); //{firstname: 'Sean', hobbies: ['sports', 'cooking'], lastName: 'Grant'}

person.greet(); //Hi i am Sean
