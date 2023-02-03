const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8888

const app = express()

// Middleware
app.set('view engine', 'pug')
app.set('views', 'views')

// Routes
app.get('/', (req, res, next) => {
  res.render('home', { pageTitle: 'Add User' })
})

app.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users' })
})

app.post('/add-user', (req, res, next) => {
  res.redirect('/users')
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`)
})