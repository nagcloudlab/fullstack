



let person = {
    // data properties
    _name: 'Nag',
    _age: 37,
    // accessor properties
    set name(newName) {
        if (!newName) {
            this._name = newName
        }
    },
    get name() {
        return this._name
    },
    set age(newAge) {
        if (newAge >= 1) {
            this._age = newAge
        }
    },
    get age() {
        return this._age;
    }
}


person.age = 0
console.log(person.age)