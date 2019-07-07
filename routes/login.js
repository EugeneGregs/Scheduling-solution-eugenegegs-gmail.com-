const config = require("config");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

//authenticate login with passport
router.post(
  "/login",
  (req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.status(401).send(info);
      } else {
        const { personnel_phone, personnel_id, reset_password } = user;
        const token = jwt.sign(
          { _phone: personnel_phone, _id: personnel_id },
          "jwtPrivateKey"
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
