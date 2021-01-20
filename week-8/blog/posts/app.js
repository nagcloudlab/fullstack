

const express = require('express')
const cors = require('cors')
const { randomBytes } = require('crypto')
const app = express();
const axios = require('axios')

app.use(cors())
app.use(express.json())


const posts = {}

app.post("/events", (req, res) => { })

app.post("/posts", (req, res) => {
    const { title } = req.body
    const id = randomBytes(4).toString('hex')
    posts[id] = {
        id,
        title
    }
    axios.post("http://localhost:4000/events", { type: 'PostCreated', data: { id, title } })
    res.status(201).send('OK')
})
app.get("/posts", (req, res) => {
    return res.json(Object.values(posts))
})


app.listen(4001, () => {
    console.log("posts-service running")
})