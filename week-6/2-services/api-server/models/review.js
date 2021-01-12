const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    stars: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Review = mongoose.model('Review', schema, 'reviews')

module.exports = {
    Review
}

