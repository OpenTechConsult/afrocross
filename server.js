const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;


// DB Config
const db = require('./config/keys').mongoUri;

// Connect to MongoDB through Mongoose
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Server running on port ${port}!`));