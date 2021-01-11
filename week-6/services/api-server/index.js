const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const express = require('express');
const path = require('path')


const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


const users = require('./routes/users');
const auth = require('./routes/auth');
const items = require('./routes/items');


mongoose.connect(config.get('db.url'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "E-shop API",
            version: '1.0.0',
        },
    },
    apis: ["index.js", './routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/items', items);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
