const express = require('express');
const commerce = require('../apiServices/commerce/routes');
const login = require('../apiServices/login/routes');
const signup = require('../apiServices/signup/routes');
const router = express.Router();


// router.use('/tiendas/listado', commerce);
router.use('/tiendas', commerce);
router.use('/login', login);
router.use('/signup', signup);
// router.route('/')
// router.post('/', commerce);


module.exports = router;
