const express = require('express');
const router = express.Router();
const Task = require('../src/models/Task');
const sequelize = require('../src/database/connection');

let Gpage;
let perPage;

router.get('/assigned', (req, res) => {
    const { page, limit, order } = req.query;
    Gpage = +page;
    perPage = +limit;
    const offset = ( +page - 1 ) * +limit;
    Task.findAndCountAll({
        offset,
        limit: +limit,
        order: sequelize.col(order)
    })
    .then( tasks => {
        const response = {
            totalTasks: tasks.count,
            page: Gpage,
            perPage: perPage,
            tasks: tasks.rows
        }
        res.send(response);
    })
})

module.exports = router;