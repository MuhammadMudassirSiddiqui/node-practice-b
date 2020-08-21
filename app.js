var express = require('express')

var app = express()
var hbs = require('hbs')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/test'))

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getnow', () => {
    return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + new Date().toDateString()
})
var port = process.env.port || 4000

app.get('/', (req, res) => {
    res.render('home', {
        title: "Home Page"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'Home Page',
        check: req.params
    })
})
app.listen(port, () => {
    console.log(`You are listining on port ${port}.`)
})