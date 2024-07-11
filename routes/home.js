const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/products');

router.route('/')
.get(getHome)


module.exports = router;