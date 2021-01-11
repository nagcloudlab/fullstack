const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_path: {
        type: String
    },
    can_buy: {
        type: Boolean
    }
});

const Item = mongoose.model('Item', schema, 'items')

module.exports = {
    Item
}

