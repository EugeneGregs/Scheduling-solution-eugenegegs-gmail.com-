const express = require("express");
const app = express();
const login = require("./routes/login");
const tasks = require("./routes/tasks");
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const passport = require('passport');
const flash = require('express-flash');

//passport config
require('./config/passport')(passport);

//database config
require("./src/database/connection");

app.use(express.json());
app.use("/personnel", login);
app.use("/tasks", tasks);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session);
app.use(flash());
app.listen(PORT, console.log(`Listening on port ${PORT}...`));
