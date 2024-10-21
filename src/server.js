const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();
//This allows access to any variable stored in the .env file
app.use(cors())
app.use(express.json());
//This tells express to handle input from JSON in the body rather than the older XML format

const port = 5001 || process.env.PORT;

const SQLconnection = require("./db/connection");
SQLconnection();

app.get("/health", (req,res) => res.status(200).send("API is healthy"));

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
 
