const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const passport = require("passport");
const auth = require("../middleware/auth");

const User = require("../models/User");

// @route     POST users/register
// @desc      Register user
// @access    Public
router.post(
  "/register",
  body("email", "Please include a valid email").isEmail(),
  body(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if a user with that email already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Create new user instance
      user = new User({
        email,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          // @todo reduce expiry
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route     PUT users/edit
// @desc      Edit users profile
// @access    Private
router.put(
  "/edit",
  auth,
  body("email", "Please include a valid email").isEmail(),
  async (req, res) => {
    const { name, bio, phone, email } = req.body;

    const newInfo = {};
    if (name) newInfo.name = name;
    if (bio) newInfo.bio = bio;
    if (phone) newInfo.phone = phone;
    if (email) newInfo.email = email;

    try {
      let user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ msg: "User not found" });

      if (user._id.toString() !== req.user.id) {
        return res.status(401).json({ msg: "Not authorized" });
      }

      user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: newInfo },
        { new: true }
      );

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
