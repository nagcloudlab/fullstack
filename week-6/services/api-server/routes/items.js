const express = require('express')
const Joi = require('joi');
const router = express.Router();
const { Item } = require('../models/item')
const { auth } = require('../middleware/auth')

const schema = Joi.object({
    stars: Joi.number().min(1).max(5).required(),
    body: Joi.string().required(),
})


router
    .route("/")
    .get((req, res, next) => {
        Item.find({}, (err, data) => {
            if (err)
                return res.status(500)
            res.status(200).json(data)
        })
    })
    .post(auth, async (req, res, next) => {
        let { body } = req
        // TODO : validate item-data 
        const item = new Item({ ...body })
        await item.save()
        res.status(201).json({ item })
    })



router
    .route("/:itemId/reviews")
    .get((req, res, next) => {
        //...
        res.json({})
    })
    .post(express.json(), auth, (req, res, next) => {
        let { body, user } = req
        const errors = schema.validate(body)
        console.log(body)
        console.log(user)
        res.json({})
    })



module.exports = router