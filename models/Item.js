const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  price: String
});

module.exports = mongoose.model("Item", itemSchema);
