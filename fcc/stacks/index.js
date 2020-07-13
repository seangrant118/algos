// Stacks!

// Functions: Push, pop, peek, length

const letters = [];
const word = "this";
let reverse = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reverse += letters.pop();
}

// check if word is a pallandrome

if (reverse === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

// create a stack
const Stack = function () {
  this.count = 0;
  this.storage = {};

  // Add value onto the end of a stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of a stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
