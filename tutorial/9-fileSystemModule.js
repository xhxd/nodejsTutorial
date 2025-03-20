const { readFileSync, writeFileSync } = require("fs");

//This will not work on the output. Don't know why.
// use terminal to run this file.
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

//const result = readFileSync("./content/result-sync.txt", "utf8");

//console.log(result);

// flag: 'a' will append the text to the file instead of overwriting it.
// flag: 'w' will overwrite the file.
// flag: 'r' will read the file.
// flag: 'r+' will read and write the file.
// flag: 'a+' will read and append the file.
// flag: 'w+' will read and write the file.
// flag: 'wx' will write the file if it doesn't exist.
// flag: 'ax' will append the file if it doesn't exist.
// flag: 'wx+' will read and write the file if it doesn't exist.
// flag: 'ax+' will read and append the file if it doesn't exist.
// flag: 'r+' will read and write the file.
