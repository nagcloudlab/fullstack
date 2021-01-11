const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', schema, 'items')

module.exports = {
    Item
}

