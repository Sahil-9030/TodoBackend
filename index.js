const express = require("express");
const app = express();

// load config fron env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import Routes for todo api

const todoRoutes = require("./routes/todos");

// mount the  todo api routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})

//connect to the databases
const dbConnect = require('./configs/database');
dbConnect();

// default route 
app.get("/",(req,res)=>{
    res.send(`<h1>This is Homepage baby</h1>`);
})