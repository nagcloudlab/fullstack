const path = require('path');
const express = require('express')
const app = express();

const todos = require('./routes/todos')
const logging = require('./middleware/logging')

var morgan = require('morgan')

/*
app.get('/', (req, res) => {

    //res.send("Hello World")

    // res.write("<h1>Hello World</h1>") // text/html
    // res.end();

    res.sendFile(path.join(__dirname, 'public', 'index.html'))

})

app.get('/css/bootstrap.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/css/bootstrap.css'))
})

app.get('/images/cts.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/images/cts.png'))
})
*/


// app.set('view engine', 'hbs');
// app.set('views', './views')

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// app.use(logging("PROD"))
app.use(morgan('short'))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/todos", todos)


app.get("/profile", (req, res, next) => {
    const profile = {
        name: 'nagabhushanam',
        age: 37,
    }
    // server-side-rendering
    res.render('Profile', { profile })
})




app.use((req, res, next) => {
    console.log("middleware-1")
    next()
})

app.use((req, res, next) => {
    console.log("middleware-2")
    next()
})

app.use("/req1", (req, res, next) => {
    console.log("middleware-3")
    res.send("response for req1")
})

app.use("/req2", (req, res, next) => {
    console.log("middleware-4")
    res.send("response for req2")
})



app.get("/path1", (req, res) => {
    console.log("path1 request processeed")
    res.redirect(301, "/path2") // Location: /path2  : same origin redicet
    // res.redirect("http://www.google.com") // : cross origin redicet
})

app.get("/path2", (req, res) => {
    console.log("path2 request processeed")
    res.send("path2 response")
})


app.get("/express.pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "docs", 'all-levels express.pdf'))
})





app.listen(3000, () => {
    console.log('server listening on port 3000')
})