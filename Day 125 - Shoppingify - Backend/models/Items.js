const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Fruits and vegatables", "Meat and Fish", "Beverages", "Pets"],
    required: true,
  },
  note: {
    type: String,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
