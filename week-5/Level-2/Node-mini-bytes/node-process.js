
const child_process = require('child_process');

//----------------------------------------------------------------

// console.log(process.pid)
// console.log(process.argv)

// process.stdout.write("hello \n") // console.log('hello')
// process.stdin.pipe(process.stdout)


// let i = 0;
// setInterval(() => {
//     i++;
//     if (i === 10)
//         process.exit(0)
// }, 1000)


//----------------------------------------------------------------

// let { exec } = child_process

// exec('cat data1.txt', (err, stout, stderr) => {
//     console.log(stout)
// })

//----------------------------------------------------------------

let { spawn } = child_process

if (process.argv[2] === 'child') {

    console.log("im inside child process") // process.stdout.write(im inside child process)

} else {
    const child = spawn(process.execPath, [__filename, 'child'])
    // child.stdout.on('data', data => {
    //     console.log("from child - " + data)
    // })
    child.stdout.pipe(process.stdout)
}

//----------------------------------------------------------------

