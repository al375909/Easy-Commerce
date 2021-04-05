const express = require('express');
const router = express.Router();
const commerce = require('../apiServices/commerce/routes');


router.use('/', commerce);