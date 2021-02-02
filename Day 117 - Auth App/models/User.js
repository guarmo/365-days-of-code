const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  // image: {
  //   type: String,
  // },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
