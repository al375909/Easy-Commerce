const express = require('express');
const controller = require('./controller');
const router = express.Router();



router.get('/' , controller.signup);

module.exports = router;
