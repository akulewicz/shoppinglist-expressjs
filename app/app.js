const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

require('./db/mongoose');

app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set('layout', 'layouts/main');
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
  }))

app.use(require('./routes/web'));



module.exports = app