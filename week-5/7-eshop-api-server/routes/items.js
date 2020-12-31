const express = require('express')
const Joi = require('joi');

const router = express.Router();


// in - memory data
let items = [
    {
        id: 1,
        name: 'Laptop',
        price: 145000,
        description: 'New mac pro',
        can_buy: true,
        image_path: 'http://localhost:8080/images/Laptop.png'
    },
    {
        id: 2,
        name: 'Mobile',
        price: 15000,
        description: 'New  pro',
        can_buy: true,
        image_path: 'http://localhost:8080/images/Mobile.png'
    }
]

let reviews = {
    "1": [
        { stars: 3, body: 'good laptop', author: 'Nag@mail.com' }
    ]
}


const schema = Joi.object({
    stars: Joi.number().min(1).max(5).required(),
    body: Joi.string().required(),
    author: Joi.string().required()
})


router
    .route("/")
    .get((req, res, next) => {
        // TODO: fetch from database ( SQL , NoSQL like MongoDB)
        res.status(200).json(items)
    });

router
    .route("/:itemId/reviews")
    .get((req, res, next) => {
        const itemId = req.params.itemId
        res.status(200).json(reviews[itemId] || [])
    })
    .post(express.json(), (req, res, next) => {

        const itemId = req.params.itemId
        const newReview = req.body;

        // server side validation
        const result = schema.validate(newReview)

        if (result.error) {
            res.status(400).json(result)
            return
        }

        if (reviews[itemId])
            reviews[itemId].push(newReview)
        else
            reviews[itemId] = [newReview]

        res.status(200).json(newReview)
    })



module.exports = router