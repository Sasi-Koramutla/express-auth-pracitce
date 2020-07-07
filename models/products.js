const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define Schema
const productSchema = new Schema ({
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true}
}, {timestamp: true});

//define Model
const Product = mongoose.model("Product", productSchema);

//export Model
module.exports = Product;

