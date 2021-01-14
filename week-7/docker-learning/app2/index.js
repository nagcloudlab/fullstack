


const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

app.get("/", (req, res) => {
    client.get("vcount", (err, vcount) => {
        if (err) throw err;
        if (!vcount)
            vcount = 1;
        else {
            vcount = Number.parseInt(vcount) + 1
        }
        client.set('vcount', vcount)
        res.send("request visit count - " + vcount)
    })

})

app.listen(8080, () => {
    console.log("server up")
})