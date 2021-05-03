const express = require('express');
const controller = require('./controller');
const router = express.Router();


router.post('/commerce', controller.signupCommerce);
router.post('/client', controller.signupClient);

module.exports = router;
