//constants
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.DATABASE_URI;
const PORT = process.env.PORT
const Comment = require('./models/Comments')


//middleware
app.use(cors());
app.use(express.json());


//Routes

app.get('/', (req, rese) => {
    rese.send("Welcome Home")
})




app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))

