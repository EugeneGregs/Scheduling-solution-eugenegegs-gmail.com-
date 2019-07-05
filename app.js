const express = require("express");
const app = express();
const login = require('./routes/login');
const tasks = require('./routes/tasks');

app.use('/personnel/login', login);
app.use('/tasks/assigned', tasks);

