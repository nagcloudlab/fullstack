

function logging(env) {

    return function (req, res, next) {

        let url = req.url
        let method = req.method;
        let start = +new Date() // timestamp in miilis
        let writeStream = process.stdout // System.out
        res.on('finish', () => {
            let end = + new Date() // timestamp in miilis
            let elapsed = end - start;
            let logMessage = `${method} : ${url} took, duration ${elapsed} \n`
            writeStream.write(logMessage)
        })

        next()
    }

}

module.exports = logging;