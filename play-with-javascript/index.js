
console.log("-index.js-")

const greetMod = require('fullstack-tng-greet')
const lodash = require('lodash')

greetMod.greet('en')

let arr1 = [1, 2, 3]
let arr2 = [1, 4, 5]

console.log(lodash.difference(arr1,arr2))
// 