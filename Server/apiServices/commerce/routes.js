const listCommerce = require("./model");
const express = require('express');
const controller = require('./controller');


const router = express.Router();


router.get('/' , controller.getCommerce);
router.post('/signup', controller.createCommerce);
router.get('/signin', controller.loginCommerce);
//router.post('/', controller.createCommerce());

module.exports = router;
