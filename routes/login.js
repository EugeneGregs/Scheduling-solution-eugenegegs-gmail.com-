const express = require("express");
const router = express.Router();
const Personnel = require("../src/models/Personnel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");

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
        const { personnel_phone, personnel_id, reset_password } = user;
        const token = jwt.sign(
          { _phone: personnel_phone, _id: personnel_id },
          "secretKey1234#"
        );
        res
          .status(200)
          .send({
            reset_password: reset_password,
            accessToken: token,
            expires_in: "24h"
          });
      }
    })(req, res);
  },
  (req, res) => {
    res.status(200).send("Login successful");
    console.log(JSON.stringify(user));
  }
);

// for testing (To be ignored)
router.get("/login", (req, res) => {
  res.status(200).send("Login successful");
});

module.exports = router;
