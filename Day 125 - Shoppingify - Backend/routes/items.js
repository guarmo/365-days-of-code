const express = require("express");
const router = express.Router();

const Item = require("../models/Items");

// @route     GET api/items
// @desc      Get all items
// @access    Public
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
    // res.json("Get all items");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     POST api/items
// @desc      Add item
// @access    Public
router.post("/", async (req, res) => {
  try {
    res.json(req.body.name);
    // res.json("Add item");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/items/addpcs
// @desc      Add piece
// @access    Public
router.put("/addpcs", async (req, res) => {
  try {
    res.json("Add piece");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/items/minuspcs
// @desc      Subtract piece
// @access    Public
router.put("/minuspcs", async (req, res) => {
  try {
    res.json("Subtract piece");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     DELETE api/items
// @desc      Delete item
// @access    Public
router.delete("/", async (req, res) => {
  try {
    res.json("Delete item");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
