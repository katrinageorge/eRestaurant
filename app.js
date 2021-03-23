require('dotenv/config');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

const menuRouter = require('./routes/menu');
const aboutRouter = require('./routes/about');

//EXPRESS setup
const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Connect to Database
mongoose.connect(process.env.DB_Connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to Database'));

//Listening
app.listen(3000, () => {
  console.log('Server on port 3000');
});

//Import routes
app.use('/menu', menuRouter);

app.use('/about', aboutRouter);

app.use('/', (req, res) => {
  res.render('home');
});

//app.use('/', userRoute);
