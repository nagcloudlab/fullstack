const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const items = require('./routes/items');
const config = require('config');

const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors())

mongoose.connect(config.get('db.url'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/items', items);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
