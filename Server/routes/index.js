const express = require('express');
const commerce = require('../apiServices/commerce/routes');
<<<<<<< HEAD
const login = require('../apiServices/login/routes')
=======
const login = require('../apiServices/login/routes');
const signup = require('../apiServices/signup/routes');
>>>>>>> origin/Carlos
const router = express.Router();


//router.use('/tiendas/listado', commerce);
router.use('/tiendas', commerce);
<<<<<<< HEAD
router.use('/login',login);
=======
router.use('/login', login);
router.use('/signup', signup);
>>>>>>> origin/Carlos
//router.route('/')
//router.post('/', commerce);



module.exports = router;