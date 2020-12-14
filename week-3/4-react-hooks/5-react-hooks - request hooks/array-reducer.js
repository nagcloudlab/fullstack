


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // intial state
const reducer = (acc, x) => acc + x;
const newState = numbers.reduce(reducer, 45)
console.log(newState)
