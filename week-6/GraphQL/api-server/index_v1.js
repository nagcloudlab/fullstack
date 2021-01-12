


const express = require('express')
const app = express();



const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
]


const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

// Api => REST api

/*
GET /api/authors
*/
app.get("/api/authors", (req, res, next) => {
    res.json(authors)
})


/*
GET /api/authors/{id}/books
*/
app.get("/api/authors/:id/books", (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    const result = books.filter(book => book.authorId === id)
    res.send(result)
})

/*
GET /api/books
*/
app.get("/api/books", (req, res, next) => {
    res.json(books)
})

/*
GET /api/books/{id}
*/
app.get("/api/books/:id", (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    res.json(books.find(book => book.id === id))
})


app.listen(8080, () => {
    console.log("api-server up")
})