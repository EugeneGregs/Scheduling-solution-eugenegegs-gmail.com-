const express = require("express");
const router = express.Router();

router.post('/login', (req, res) =>{
    res.send("Login");
})

router.get('/login', (req, res) =>{
    res.send("Login successful");
})

module.exports = router;