const path = require('path');
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const itemsRouter = require('./routes/items')
const cartRouter = require('./routes/cart')


const app = express();

app.use(morgan('dev'))

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/items', itemsRouter)
app.use('/api/cart', cartRouter)

console.log(process.env)

const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

