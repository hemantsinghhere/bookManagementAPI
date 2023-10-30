const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

// Parsing Data into JSON 
app.use(bodyParser.json());

// Mounting books route
const bookRoute = require("./routes/bookRoute");
app.use('/books', bookRoute);

// MongoDB Connection

require("./config/database").connect();



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
