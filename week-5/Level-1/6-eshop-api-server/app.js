const path = require('path');
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const itemsRouter = require('./routes/items')
const cartRouter = require('./routes/cart')

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const app = express();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "eshop api server",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Nag",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
        ],
    },
    apis: ["./routes/items.js", "./routes/cart.js"],
};

const specs = swaggerJsdoc(options);


app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);


// HTTP request looging lib
app.use(morgan('dev'))


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// to server cross orgin browser's clients
app.use(cors(corsOptions))

// to serve static resources like html , css , images , web fonts
app.use(express.static(path.join(__dirname, 'public')))

// to serve api calls
app.use('/api/items', itemsRouter)
app.use('/api/cart', cartRouter)


// read port from env else default port
const port = process.env.port || 8080

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

