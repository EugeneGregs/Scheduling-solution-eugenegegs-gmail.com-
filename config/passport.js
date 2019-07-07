const LocalStrategy = require("passport-local").Strategy;
const Personnel = require("../src/models/Personnel");
const passport = require("passport");
const bcrypt = require("bcrypt");
const passErrorMessage = {
  error: {
    password: "You have entered an incorrect password"
  }
};
const nouserErrorMessage = {
    error: {
      password: "User not found"
    }
  };

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
        // (username, password, done) => {
        //     console.log("Verification function called");
        //     return done(null, { username, id: "1" });
        //   }

    //   { userNameField: "personnel_phone" },
      (username, password, done) => {
        Personnel.findOne({ where: { personnel_phone: username } })
          .then(personnel => {
            if (!personnel)
              return done(null, false, nouserErrorMessage);

            //match password
            bcrypt.compare(
              password,
              personnel.personnel_password,
              (err, isMatch) => {
                if (err) throw err;
                if (isMatch) return done(null, personnel);
                else return done(null, false, passErrorMessage);
              }
            );
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(user.id);
  });

  passport.deserializeUser((id, done) => {
    Personnel.findByPk(id).then(done(err, user));
  });
};
