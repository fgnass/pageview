var express = require('express')
  , pageview = require('../..')
  , app = express()

app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

app.use('/mounted', pageview(__dirname + '/mounted'))

app.get('*', pageview())

app.all('*', function (req, res) {
    res.send('Page Not Found', 404)
})

module.exports = app