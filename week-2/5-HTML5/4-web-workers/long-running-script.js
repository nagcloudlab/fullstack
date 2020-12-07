

console.log("long-script started..")
let i = 0;
while (i < 1000000000) {
    i++
}
console.log("long-script finished..")
postMessage({ value: i })