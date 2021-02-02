const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const FacebookStrategy = require("passport-facebook");
const FACEBOOK_APP_ID = require("./config/default").FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = require("./config/default").FACEBOOK.clientSecret;

const app = express();

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      // @todo change to actual domain name
      callbackURL: "http://localhost:3000/profile",
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      console.log(profile);
      return cb(err, user);
    }
  )
);

// Db config
const db = require("./config/default").MongoURI;

// Connect to DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Bodyparser
app.use(express.json({ extended: false }));

// routes
app.use(cors());
app.use(passport.initialize());

app.get(
  "/auth/facebook",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/profile");
  }
);

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
