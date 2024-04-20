const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const svRouter = require('./svRouter');
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', svRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb+srv://legiahuy124578:huydz123456789@huy.0r5j3uq.mongodb.net/dealine")
app.use('/students', svRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});