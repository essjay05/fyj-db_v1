const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8888

const app = express()
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const users = []

// Middleware
app.engine('hbs', expressHbs.engine({ defaultLayout: 'main-layout', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res, next) => {
  res.render('home', { pageTitle: 'Add User' })
})

app.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', hasUsers: users.length > 0, users: users })
})

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username })
  res.redirect('/users')
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`)
})