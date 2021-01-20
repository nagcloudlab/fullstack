

const express = require('express')
const cors = require('cors')
const app = express();
const axios = require('axios')

app.use(cors())
app.use(express.json())


app.post("/events", (req, res) => {
    let event = req.body
    axios.post("http://localhost:4001/events", event)
    axios.post("http://localhost:4002/events", event)
    axios.post("http://localhost:4003/events", event)
    res.send({ status: 'OK' });
})


app.listen(4000, () => {
    console.log("events-bus running")
})