const express = require("express");
const router = express.Router();

const ShoppingList = require("../models/ShoppingList");

// @route     GET api/shoppingList
// @desc      Get all shopping lists
// @access    Public
router.get("/", async (req, res) => {
  try {
    res.json("Get all shopping lists");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     GET api/shoppingList/:id
// @desc      Get single shopping list
// @access    Public
router.get("/:id", async (req, res) => {
  try {
    res.json("Get single shopping list");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/shoppingList/addItem
// @desc      Add item to list
// @access    Public
router.put("/addItem", async (req, res) => {
  try {
    res.json("Add item to list");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/shoppingList/removeItem
// @desc      Remove item from list
// @access    Public
router.put("/addItem", async (req, res) => {
  try {
    res.json("Remove item from list");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/shoppingList/removeItem
// @desc      Remove item from list
// @access    Public
router.put("/removeItem", async (req, res) => {
  try {
    res.json("Remove item from list");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/shoppingList/addpcs
// @desc      Remove item from list
// @access    Public
router.put("/addpcs", async (req, res) => {
  try {
    res.json("Add piece");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/shoppingList/minuspcs
// @desc      Remove item from list
// @access    Public
router.put("/minuspcs", async (req, res) => {
  try {
    res.json("Subtract piece");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
