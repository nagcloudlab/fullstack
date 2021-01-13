const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi')
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// Information Expert Principle (add method to model)
schema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, name: this.name, email: this.email }, config.get('jwt.secret'));
    return token;
};

const User = mongoose.model('User', schema, 'users')

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user);
}

module.exports = {
    User,
    validate: validateUser
}