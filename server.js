const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect( 'mongodb://127.0.0.1:27017/bugtracker', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
const bugRouter = require('./routes/bugs');

app.use('/bugs', bugRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
