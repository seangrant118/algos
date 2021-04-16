//Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

//hint

//Remember to use \s after Oh{3,6} to include a white space, followed by no to pass all test cases. All test cases are written using a capital O, however the testcases could also be passed by using ignore-case : /oh{3,6}\sno/i

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
