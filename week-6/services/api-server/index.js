const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');

const express = require('express');
const app = express();


mongoose.connect('mongodb+srv://user1:user111@cluster0.socov.mongodb.net/app_db', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
