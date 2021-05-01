const express = require('express');
const controller = require('./controller');
const router = express.Router();


router.get('/commerce', controller.signupCommerce);
router.get('/client', controller.signupClient);