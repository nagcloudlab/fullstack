
//--------------------------------
// obj literal enhancements
//--------------------------------

//--------------------------------
// ES5
//--------------------------------
let name = "Nag"
let age = 36

let person = {
    name: name,
    age: age,
    sayName: function () {
        //..
    },
    3: 'three',
    'home-address': 'chennai'
}

//--------------------------------
// ES6
//--------------------------------

let addressType = "office"  // office | vacation

let person2 = {
    name,
    age,
    sayName() {
        //..
    },
    [1 + 2]: 'three',
    [addressType + "-address"]: 'chennai-india',
    'say Hi'() {
        console.log("hi")
    }
}

person2['say Hi']()