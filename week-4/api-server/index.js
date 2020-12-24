
const express = require('express')
const app = express()

// for static resources i.e images
app.use(express.static('public'))

// 
const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: "http://172.20.10.3:8080/assets/jacket.jpg"
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: "http://172.20.10.3:8080/assets/couch.jpg"
    },
];

app.get("/api/listings", (req, res) => {
    res.json(listings)
})


app.listen(8080, () => {
    console.log("api server listening on port 8080")
})