const path = require('path');
const express = require('express');
const morgan = require('morgan')
const app = express();


/**
 * 
 * 
 * - application middlewares
 * - router middlewares
 * - error handling middlewares
 * - built-in middlewares
 * - third party middlewares
 * 
 */

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(morgan('dev')); // HTTP logging
app.use(express.static(path.join(__dirname, 'public'))) // server static resources


const todosRouter = express.Router()
todosRouter
    .route('/')
    .get((req, res, next) => {
        res.status(200).json([])
    })

app.use("/api/todos", todosRouter)


app.get("/info", (req, res, next) => {
    if (true) {
        next(new Error('oops'))
        return
    }
    res.status(200).json({ message: 'hello ' })
})


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.use('/dynamic-page', (req, res, next) => {
    let time = new Date().toLocaleTimeString()
    res.render('page', { time })
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})