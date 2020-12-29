
/**
 * 
 *  blocking IO
 * 
 */

const fs = require('fs');

// 6s
const vegMenu = fs.readFileSync("./veg.txt") // blocking / synchrnous / pull  IO  e.g 2s
console.log(vegMenu.toString('utf-8'));

// 4s
const nonVegMenu = fs.readFileSync("./non-veg.txt") // blocking / synchrnous / pull  IO  e.g 2s
console.log(nonVegMenu.toString('utf-8'));

// total = 10s

console.log("do something else...")
