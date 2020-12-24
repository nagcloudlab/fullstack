
const express = require('express')
const app = express()
const multer = require('multer')


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


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/assets/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
});

app.post('/api/listings', upload.single('images'), (req, res, next) => {
    console.log(req.file)
    let listing = {
        id: listings.length + 1,
        title: req.body.title,
        price: req.body.price,
        image: `http://172.20.10.3:8080/assets/${req.file.originalname}`
    }
    listings.unshift(listing)
    res.json(listing)
})


app.listen(8080, () => {
    console.log("api server listening on port 8080")
})