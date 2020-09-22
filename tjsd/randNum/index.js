// return a random number from 1-7 that uses a function that generates a randon num 1-5

function rand5() {
  return 1 + Math.random() * 4;
}

function rand7() {
  return 5 + (rand5() / 5) * 2;
}
