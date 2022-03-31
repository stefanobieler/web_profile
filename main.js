const express = require('express')
const app = express()


app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.post('/',  (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(3000)