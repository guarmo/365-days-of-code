// Shopping list data example
const shoppingList = [
  {
    name: "Custom name",
    date: "12/10/2020",
    completed: false,
    cancelled: false,
    items: [
      {
        name: "Salmon",
        category: "Meat and Fish",
        pieces: 3,
      },
      {
        name: "Avocado",
        category: "Fruits and vegetables",
        pieces: 3,
      },
    ],
  },
];

const mongoose = require("mongoose");

const ShoppingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Fruits and vegatables", "Meat and Fish", "Beverages", "Pets"],
      required: true,
    },
    pieces: {
      type: Number,
      default: 1,
    },
  },
});

module.exports = ShoppingList = mongoose.model(
  "shoppingList",
  ShoppingListSchema
);
