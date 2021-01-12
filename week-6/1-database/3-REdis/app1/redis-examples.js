

const redis = require('redis')
const redisClient = redis.createClient();




redisClient.flushall();

redisClient.lpush("cart", "item-1")
redisClient.lpush("cart", "item-2")
redisClient.lpush("cart", "item-3")




redisClient.lrange('cart', 0, -1, (err, data) => {
    if (err) throw err;
    console.log(data)
})