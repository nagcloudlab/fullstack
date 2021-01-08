

const express = require('express')
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://root:rootpassword@localhost:27017/test"
const client = new MongoClient(uri);

const app = express();

// api/potions`
app.get("/api/potions", async (req, res) => {

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('potions');
        const potions = await collection.find()
        res.json(potions)
    } catch (error) {
        throw error;
        // res.json(error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

})

app.listen(3000)
