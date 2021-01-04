
const mongoose = require('mongoose');

const url = 'mongodb+srv://user1:user111@cluster0.socov.mongodb.net/mydb?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose => ODM ( object document model )

// object Model
const Customer = mongoose.model('Customer', { name: String, address: String }, "customers");


// insert new customer

// const customer = new Customer({
//     name: 'NAG', address: 'chennai-india'
// })
// customer.save().then(() => console.log("new customer saved"))


// // get all customers
// Customer.find({}, (err, customers) => {
//     if (err) throw err
//     console.log(customers)
// })


/**
 * 
 * {"_id":{"$oid":"5ff372e52917de48e1917ba1"},"name":"NAG","address":"chennai-india","__v":{"$numberInt":"0"}}
 * 
 */

Customer.findByIdAndUpdate("5ff372e52917de48e1917ba1", { address: 'chennai' }, (err, result) => {
    if (err) throw err;
    console.log(result)
})