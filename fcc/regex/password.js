// > 5 characters long
// 2 consecutive digits

let samplePass = "nsahd22";
let regex = /(?=\w{6})(?=\w*\d{2})/;
let result = regex.test(samplePass);
