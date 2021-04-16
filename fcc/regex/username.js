// Usernames can only use alpha-numeric characters.

//The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

//Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
