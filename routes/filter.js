const express = require('express');
const router = express.Router();
const { postFilter } = require('../controllers/controllers');

router.route('/')
.post(postFilter)


module.exports = router;