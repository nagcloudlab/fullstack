
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


// in-memory db
const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

const app = express();
app.use(bodyParser.json());

const accessTokenSecret = 'shhhhh';

app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role, comp: 'cognizant' }, accessTokenSecret);
        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }


})



const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
];


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



// admin , member read books
app.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});

// admin add new book
app.post('/books', authenticateJWT, (req, res) => {
    const { role } = req.user;
    if (role !== 'admin') {
        return res.sendStatus(403);
    }
    const book = req.body;
    books.push(book);
    res.send('Book added successfully');
});



app.listen(3000, () => {
    console.log('service started on port 3000');
});