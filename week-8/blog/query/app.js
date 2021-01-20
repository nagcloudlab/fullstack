const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())


const posts = {}

app.post("/events", (req, res) => {
    const { type, data } = req.body
    if (type === "PostCreated") {
        let { id, title } = data
        posts[id] = { id, title, comments: [] }
    }
    if (type === "CommentCreated") {
        let { id, content, postId } = data
        let comments = posts[postId].comments || []
        comments.push({ id, content, postId })
        posts[postId].comments = comments
    }
})

app.get("/posts", (req, res) => {
    return res.send(posts)
})

app.listen(4003, () => {
    console.log("query-service running")
})