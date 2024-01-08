// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
