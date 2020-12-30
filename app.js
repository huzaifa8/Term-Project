const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRoute = require('./routes/home');
const adminRoutes = require('./routes/admin');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use('/', homeRoute);

app.listen('3000', () => console.log('listening on port 3000...'));
mongoose
  .connect(
    `mongodb+srv://huzaifa:${config.get(
      'db.password'
    )}@cluster0.470p8.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connected to db...'))
  .catch(() => console.log('Could not connect to db.'));
