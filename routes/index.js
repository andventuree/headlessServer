const express = require('express');
const router = express.Router();

router.use('/cheese', require('./cheeses.js'))

module.exports = router;


