const express = require('express');
const router = express.Router();
const Task = require('../src/models/Task');
const sequelize = require('../src/database/connection');

router.get('/assigned', (req, res) => {
    const { page, limit, order } = req.query;
    const offset = page * limit;
    const recLimit = offset + limit;
    Task.findAll({
        recLimit,
        offset,
        order: sequelize.col(order)
    })
    .then( tasks =>{
        res.send(tasks)
    })
})

module.exports = router;