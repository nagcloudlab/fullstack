
/**
 * 
 *  non blocking IO
 * 
 */

const fs = require('fs');

const callback = (err, data) => {
    if (err) throw err;
    console.log(data.toString('utf-8'))
}

fs.readFile('./veg.txt', callback) // 6s
fs.readFile('./non-veg.txt', callback) // 4s

// total : 6s

console.log("do something else...")
