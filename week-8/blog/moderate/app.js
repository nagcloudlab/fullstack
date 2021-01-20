const express = require('express')
const cors = require('cors')
const app = express();
const axios = require('axios')

app.use(cors())
app.use(express.json())


function handleEvent(type, data) {
    if (type === "CommentCreated") {
        let { id, content, postId } = data
        setTimeout(() => {
            let status = content.includes('orange') ? 'rejected' : 'approved'
            axios.post("http://localhost:4000/events", {
                type: 'CommentModerated',
                data: {
                    id,
                    content,
                    postId,
                    status
                }
            })
        }, 3000)
    }
}

app.post("/events", (req, res) => {
    const event = req.body;
    const { type, data } = event
    handleEvent(type, data)
})

app.get("/posts", (req, res) => {
    return res.send(posts)
})

app.listen(4004, async () => {
    console.log("moderate-service running")
    const res = await axios.get("http://localhost:4000/events");
    const events = res.data;
    for (let event of events) {
        console.log("processing event ", event.type)
        handleEvent(event.type, event.data)
    }
})