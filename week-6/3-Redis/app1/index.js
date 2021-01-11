

const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis')
const app = express();



const redisClient = redis.createClient(6379);

// const reposCache = {
// }

async function getRepos(req, res, nex) {
    try {
        console.log("Fetching data")
        const { username } = req.params
        const url = `https://api.github.com/users/${username}`
        // http request to github API
        const response = await fetch(url)
        const data = await response.json();
        const repos = data.public_repos;
        // reposCache[username] = repos // SET
        redisClient.setex(username, 3600, repos)
        res.send(`<h2>${username} has ${repos} Github repos</h2>`)
    } catch (err) {
        console.error(err)
        res.status(500)
    }
}


function cache(req, res, next) {
    const { username } = req.params
    // const data = reposCache[username] // GET
    redisClient.get(username, (err, data) => {
        if (err) throw err
        if (data) {
            res.send(`<h2>${username} has ${data} Github repos</h2>`)
        } else {
            next()
        }
    })
}


app.use("/repos/:username", cache, getRepos)

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`App listening on port ${PORT}`);
});