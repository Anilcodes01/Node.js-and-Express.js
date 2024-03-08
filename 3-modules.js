// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const name = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
console.log(data)
require('./7-mind-greneda')


sayHi('susan')
sayHi(name.john)
sayHi(name.peter)