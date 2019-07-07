const express = require("express");
const router = express.Router();
const Personnel = require("../src/models/Personnel");
const bcrypt = require("bcrypt");
const passport = require("passport");

//authenticate login with passport
router.post(
  "/login",
  (req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      console.log(error);
      console.log(user);
      console.log(info);

      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.status(401).send(info);
      } else {
        next();
      }

      //res.status(401).send(info);
    })(req, res);
  },
  (req, res) => {
    res.status(200).send("Login successful");
  }
);

// for testing (To be ignored)
router.get("/login", (req, res) => {
  res.status(200).send("Login successful");
});

module.exports = router;
