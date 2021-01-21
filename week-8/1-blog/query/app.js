const express = require('express')
const cors = require('cors')
const app = express();
const axios = require('axios')

app.use(cors())
app.use(express.json())


const posts = {}

function handleEvent(type, data) {

    if (type === "PostCreated") {
        let { id, title } = data
        posts[id] = { id, title, comments: [] }
    }
    if (type === "CommentCreated") {
        let { id, content, postId, status } = data
        let comments = posts[postId].comments || []
        comments.push({ id, content, postId, status })
        posts[postId].comments = comments
    }
    if (type === "CommentUpdated") {
        const { id, postId, status, content } = data
        const post = posts[postId]
        const comment = post.comments.find(comment => comment.id === id)
        comment.status = status
        comment.content = content
    }

}

app.post("/events", (req, res) => {
    const { type, data } = req.body
    handleEvent(type, data)
})

app.get("/posts", (req, res) => {
    return res.send(posts)
})

app.listen(4003, async () => {
    console.log("query-service running")
    const res = await axios.get("http://localhost:4000/events");

    const events = res.data;
    for (let event of events) {
        console.log("processing event ", event.type)
        handleEvent(event.type, event.data)
    }

})