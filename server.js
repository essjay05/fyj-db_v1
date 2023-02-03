const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8888

const app = express()
const bodyParser = require('body-parser')

const users = []

// Middleware
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(bodyParser({ extended: false }))

// Routes
app.get('/', (req, res, next) => {
  res.render('home', { pageTitle: 'Add User' })
})

app.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', users: users })
})

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username })
  res.redirect('/users')
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`)
})