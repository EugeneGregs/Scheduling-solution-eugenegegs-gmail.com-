const express = require("express");
const app = express();
const login = require('./routes/login');
const tasks = require('./routes/tasks');
const PORT = process.env.PORT || 3000;

require('./src/database/connection')
app.listen(PORT, console.log(`Listening on port ${PORT}...`));

app.use('/personnel', login);
app.use('/tasks', tasks);

