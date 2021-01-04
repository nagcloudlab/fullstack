

const express = require('express')
const router = express.Router();

// in-memory db
const cart = {} // Node provess in-memory

router
    .post('/', express.json(), (req, res, next) => {
        let cartLine = req.body
        let { item } = cartLine;
        let { id } = item;
        if (!cart[id])
            cart[id] = { item, qty: 1 }
        else
            cart[id] = cart[id].qty + 1
        res.status(200).json('item added in cart')
    })
    .get("/", (req, res, next) => {
        res.status(200).json(cart)
    })



module.exports = router