const express = require("express");
const mongoose = require ("mongoose");
const Product = require("./models/products");

const app = express();
const port = 3000;
const mongoURI = 'mongodb://localhost:27017/'+ 'products';

//mongoose connection
mongoose.connect(mongoURI, 
                 {useFindAndModify: false,
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                 },
                 () => {
                     console.log("connected to mongodb");
                 }
                );

//get
app.get("/", (req, res) => {
    res.send("At the root!");
});

app.get("/products", (req, res) => {
    res.send("At the products");
});

//listen
app.listen(port, () => {console.log("listening at port " + port)});