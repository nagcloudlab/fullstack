

//-------------------------------------------------
// trainer module
//-------------------------------------------------

// Timer Api
//let interval= setInterval(),   clearInterval(interval)
// setTimeout ()


let tnr = {
    getSubject() {
        //.... 3s
        return "sub-1"
    },
    getSubjectAsync() {
        // ... 3s
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("T - resolving/rejecting promise")
                resolve("sub-1") // push
                // reject("No Time")
            }, 3000)
        });
    }
}
//-------------------------------------------------
// participant module
//-------------------------------------------------

function learnAndWork() {

    // let sub = tnr.getSubject()// pull / blocking-call
    // console.log(sub)

    console.log("P- requesting subject on Tnr")
    let promise = tnr.getSubjectAsync(); // Non-blocking call
    console.log("P- got promise, defering action future")

    let newPromise = promise
        .then(sub => {
            console.log("P- learning " + sub)
            return "sub-1"
        })
        .catch(error => console.log("P- oops " + error))

    console.log("P- with other work..")


    newPromise
        .then(sub => {
            console.log("NP - learning " + sub)
        })

}

learnAndWork()