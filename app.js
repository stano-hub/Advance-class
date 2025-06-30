// import express 
const express = require("express");
// import the mongoose module that will help you connect to the database
const mongoose= require("mongoose");

// import the dotenv module
require('dotenv').config();

// create an express application
const app = express();

// specify the data format you expect to receive your data in
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// connect to the Database
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB Connected successfully")).catch(err => console.error(err))

// specify the port the application will be running
const PORT = process.env.PORT || 3000;

// listen to the port 
app.listen(PORT, ()=>{
    console.log("The server is running on port " + PORT)
})
