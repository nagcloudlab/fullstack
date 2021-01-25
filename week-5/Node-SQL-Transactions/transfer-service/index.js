
const { Client } = require("pg") // driver

// create a new client and point it to your database location
// here, it points to the pet_shop database running on my
// local machine, without any password
const client = new Client("postgres://user1:user111@localhost:5432/accounts-db")

// initialize the db connection
client.connect()
    .then(() => {
        console.log("connected..")
    })
    .catch(err => console.log(err))




// start the transaction using the begin statement
// client
//     .query("begin")
//     .then(() => {
//         return client.query("CREATE TABLE accounts(num varchar(12),balance int)")
//     })
//     .then((res) => {
//         // next, insert record-1
//         return client.query(
//             "INSERT INTO accounts (num, balance) VALUES ($1, $2)",
//             ["1", 1000.00]
//         )
//     })
//     .then((res) => {
//         // next, insert record-2
//         return client.query(
//             "INSERT INTO accounts (num, balance) VALUES ($1, $2)",
//             ["2", 1000.00]
//         )
//     })
//     .then((res) => {
//         // once that's done, run the commit statement to
//         // complete the transaction
//         return client.query("commit")
//     })
//     .then((res) => {
//         // if the transaction completes successfully
//         // log a confirmation statement
//         console.log("transaction completed")
//     })
//     .catch((err) => {
//         // incase there are any errors encountered
//         // rollback the transaction
//         console.error("error while querying:", err)
//         return client.query("rollback")
//     })
//     .catch((err) => {
//         // incase there is an error when rolling back, log it
//         console.error("error while rolling back transaction:", err)
//     })



//------------------------------------------------------------------------------------------




// client
//     .query("begin")
//     .then((res) => {
//         return client.query("SELECT * FROM accounts WHERE num='1'")
//     })
//     .then((res) => {
//         // get the total count from the result of the previous query
//         const balance = parseInt(res.rows[0].balance)
//         // set the query params based on the `catCount`
//         return client.query(
//             "UPDATE accounts SET balance=$1",
//             [balance - 500]
//         )
//     })
//     .then((res) => {
//         // throw new Error("something bad happened...")
//     })
//     .then((res) => {
//         return client.query("commit")
//     })
//     .then((res) => {
//         console.log("transaction completed")
//     })
//     .catch((err) => {
//         console.error("error while querying:", err)
//         return client.query("rollback")
//     })
//     .catch((err) => {
//         console.error("error while rolling back transaction:", err)
//     })





// client
//     .query("begin")
//     .then((res) => {
//         return client.query("SELECT * FROM accounts WHERE num='1'")
//     })
//     .then(res => {
//         console.log(res.rows[0])
//     })