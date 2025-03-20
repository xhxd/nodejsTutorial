//Modules
//Common js, every file is module(by default)
// Module - Encapsulated code (only share minimum)
const names = require("./4-module2");
const sayHi = require("./5-module3");
const data = require("./6-module4");
console.log(names);
console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
