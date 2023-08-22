const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const ensureLoggedIn = require('./config/ensureLoggedIn')

app.use(express.json())

app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img', 'coffee-favicon.jpeg'))) //path.join to account for different syntax (/ for Mac and \ for Windows) for different OS.
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./config/checkToken'))
app.use('/api/users', require('./routes/api/users')) // to avoid clashing with static files AND clashing with the front-end routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'))
app.use('/api/apiKeys', require('./routes/api/apiKeys'))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app