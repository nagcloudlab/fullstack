const path = require('path');
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const itemsRouter = require('./routes/items')
const cartRouter = require('./routes/cart')


const app = express();

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

