// Stacks!

// Functions: Push, pop, peek, length

const letters = [];
const word = "racecar";
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
