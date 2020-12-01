

// interface / abstraction
interface Wheel {
    rotate: () => void
}


// brand
class MRFWheel implements Wheel {
    constructor() {
        console.log("MRFWheel instance created..")
    }
    rotate() {
        console.log("MRF-wheel rotating..")
    }
}

// brand
class CEATWheel implements Wheel {
    constructor() {
        console.log("CEATWheel instance created..")
    }
    rotate() {
        console.log("CEATWheel rotating..")
    }
}


/*

    design & performance issues
    ---------------------------
    -> dependent & dependency are tightly-coupled
       => can't extend module with new features easily
    -> on every move, we creating & destroying new wheel instance
       ==> resource use high i,e slow
    -> unit testing not possible
       ==> dev/bug fix slow 


       reasons for above these issues ?

       ==> dependent creating it's own dependency in it's home ( class | method )


       solution :

       ==> never create dependency in dependent's home, inject from outside  ( Dependency inversion principle ) Inversion of control


       --------------------------------------------------------------------------

       OO principles a.k.a SOLID principles


        S: Single-responsibility principle
        O: Open for entesions-closed for modification principle
        L: Liskov substitution principle
        I: Interface segregation principle
        D: Dependency inversion principle

--------------------------------------------------------------------------

*/

class Car {
    private wheel: Wheel;
    constructor(wheel: Wheel) {
        this.wheel = wheel;
    }
    setWheel(wheel: Wheel) {
        this.wheel = wheel;
    }
    move() {
        this.wheel.rotate()
        console.log("Car moving..")
    }
}


const mrfWheel: Wheel = new MRFWheel()
const ceatWheel: Wheel = new CEATWheel();
const car = new Car(mrfWheel)
car.move()
car.setWheel(ceatWheel)
car.move()



//------------------------------------------------------------


interface IPerson {
    name: string,
    age: number,
    sayName: () => void
}


const person: IPerson = {
    name: "Nag",
    age: 12,
    sayName() {

    }
}

//------------------------------------------------------------
