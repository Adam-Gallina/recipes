const port = process.env.PORT || 3235

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const exphbs = require('express-handlebars')

const recipe_db = require('./database/recipe_db')

app.engine('handlebars', exphbs.engine({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(express.json())

app.get('/', function(req, res, next) {
    res.status(200).send('<p>Look a recipe</p>')
})

app.get('/fart', function(req, res, next) {
    res.status(200).render('recipe', recipe_db.get_recipe(0))
})

app.all('/*path', function(req, res) {
    console.log("404 for " + req.url)
    res.status(404).send('Error 404: Could not find requested resource "' + req.path + '"')
})

server.listen(port, function() {
    console.log('Server is listening on port ' + port + '!')
})