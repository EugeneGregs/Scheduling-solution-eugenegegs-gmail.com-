const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const order = req.query.orderMethod;

})

module.exports = router;