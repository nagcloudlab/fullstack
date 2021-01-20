

const express = require('express')
const cors = require('cors')
const { randomBytes } = require('crypto')
const axios = require('axios')

const app = express();

app.use(cors())
app.use(express.json())

const commentsByPostId = {
}

app.post("/events", (req, res) => {

})

app.post("/posts/:id/comments", (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { content } = req.body
    const postId = req.params.id
    const comments = commentsByPostId[postId] || []
    comments.push({ id, content, postId })
    commentsByPostId[postId] = comments
    axios.post("http://localhost:4000/events", { type: 'CommentCreated', data: { id, content, postId } })
    res.status(201).send('OK')
})

app.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id
    return res.json(commentsByPostId[postId])
})


app.listen(4002, () => {
    console.log("comments-service running")
})