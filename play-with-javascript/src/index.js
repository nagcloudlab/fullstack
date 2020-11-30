

//index.js
console.log("--------------------------------")
const greetMain = require('fullstack-greeting')
const _ = require('lodash')
greetMain.greet('en')//
console.log(_.difference([1, 2], [3, 1]))
console.log("--------------------------------")

// import { item1,item2 } from './menu/index'
// console.log(item1)
// console.log(item2)


// or

// import { item1 as drink, item2 as snack } from './menu/index'
// console.log(drink)
// console.log(snack)

// or

// import * as refreshItems from './menu/index'
// console.log(refreshItems.item1)
// console.log(refreshItems.item2)


//

// import item, { secondaryItem1 } from './menu/index'
// console.log(item)
// console.log(secondaryItem1)

//
// import * as refreshItems from './menu/index'
// - or -
const refreshItems = require('./menu')
console.log(refreshItems.default)
console.log(refreshItems.secondaryItem1)


import './style/theme.css'