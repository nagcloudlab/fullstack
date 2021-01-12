const express = require('express')
const Joi = require('joi');
const router = express.Router();
const { Item } = require('../models/item')
const { Review } = require('../models/review')
const { auth } = require('../middleware/auth')

const schema = Joi.object({
    stars: Joi.number().min(1).max(5).required(),
    body: Joi.string().required(),
})


router
    .route("/")
    /**
     * @swagger
     * /api/items:
     *   get:
     *     description: Get all items
     *     responses:
     *       200:
     *         description: Success
     * 
     */

    /*
     * reference : https://github.com/JayaramachandranAugustin/EmployeeManagementService/blob/main/index.js
    */
    .get((req, res, next) => {
        Item.find({}, (err, data) => {
            if (err)
                return res.status(500)
            res.status(200).json(data)
        })
    })
    .post(auth, async (req, res, next) => {
        let { body } = req
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
    .post(express.json(), auth, async (req, res, next) => {

        let itemId = req.params.itemsId;
        let { body, user } = req

        const review = new Review({
            stars: body.stars,
            body: req.body.body,
            item: mongoose.Schema.Types.ObjectId(itemId),
            user: mongoose.Schema.Types.ObjectId(user._id),
        })

        await review.save()
        //..
        res.json(review)
    })



module.exports = router