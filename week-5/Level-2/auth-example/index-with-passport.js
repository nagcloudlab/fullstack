


const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./model/User'); // helps to db operations with mongodb on User Model, 

mongoose.connect('mongodb+srv://user1:user111@cluster0.socov.mongodb.net/shop_db?retryWrites=true&w=majority');
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

require('./auth');

const users = require('./routes/users'); // login & register
const secureRoute = require('./routes/secure-routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', users);

// if ('google') {
//     app.use(passport.authenticate('google', { session: false }))
// }

// if ('facebook') {
//     app.use(passport.authenticate('facebook', { session: false }))
// }

// if ('jwt') {
app.use(passport.authenticate('jwt', { session: false }))
// }

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/secure', secureRoute);

// Handle errors.
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(3000, () => {
    console.log('Server started.')
});