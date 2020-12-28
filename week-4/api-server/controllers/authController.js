var exports = module.exports = {};

let config = require('../config/database'),
    jwt = require('jsonwebtoken');

// Call User model
let User = require("../models/user");

exports.register = function (req, res) {
    console.log(req.body)
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        let newUser = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        });
        // save the user
        newUser.save(function (err) {
            console.log(err)
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
};

exports.login = function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    let token = jwt.sign({ email: user.email, name: user.name }, config.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token: token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
};