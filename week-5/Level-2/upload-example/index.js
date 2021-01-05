
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
})
var upload = multer({ storage: storage })


app.post("/upload-file", upload.single('my-file'), (req, res) => {
    const { body, file } = req;
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

app.post('/upload-multiple-files', upload.array('my-files', 12), (req, res, next) => {
    const { body, files } = req;
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
})


app.use((err, req, res, next) => {
    if (err)
        res.json(err)
})


app.listen(3000, () => console.log('Server started on port 3000'));
