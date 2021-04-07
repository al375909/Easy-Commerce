const listCommerce = require("./model");
const express = require('express');
const controller = require('./controller');


console.log("hoal2");
const router = express.Router();



router.get('/' , controller.createCommerce);
//router.post('/', controller.createCommerce());

module.exports = router;
