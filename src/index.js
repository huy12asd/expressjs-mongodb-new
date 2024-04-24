const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRouter = require('./students/studentRouter');
const classRouter = require('./classes/classRouter');
const subjectRouter = require('./subjects/subjectRouter');
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', studentRouter);
app.use('/', classRouter);
app.use('/', subjectRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb+srv://legiahuy124578:huydz123456789@huy.0r5j3uq.mongodb.net/dealine")
 app.use('/students', studentRouter);
app.use('/classes',classRouter);
app.use('/subjects',subjectRouter); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});