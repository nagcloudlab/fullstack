

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

    const event = req.body;
    const { type, data } = event;
    if (type === "CommentModerated") {
        const { id, postId, status } = data
        const comments = commentsByPostId[postId]
        const comment = comments.find(comment => comment.id === id)
        comment.status = status
        axios.post("http://localhost:4000/events", { type: 'CommentUpdated', data })
    }
    if (type === "CommentUpVoted") {
        // TODO
    }
    
})

app.post("/posts/:id/comments", (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { content } = req.body
    const postId = req.params.id
    const comments = commentsByPostId[postId] || []
    comments.push({ id, content, postId })
    commentsByPostId[postId] = comments

    // emit event
    axios.post("http://localhost:4000/events", { type: 'CommentCreated', data: { id, content, postId, status: 'PENDING' } })
    res.status(201).send('OK')

})

app.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id
    return res.json(commentsByPostId[postId])
})


app.listen(4002, () => {
    console.log("comments-service running")
})