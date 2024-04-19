const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const svRouter = require('./svRouter');
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', svRouter);

async function connectDB() {
  await mongoose.connect(uri);
}

app.use('/students', svRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});