const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set('layout', 'layouts/main');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('pages/home');
})



module.exports = app