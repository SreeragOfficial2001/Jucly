
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Product", ProductSchema);