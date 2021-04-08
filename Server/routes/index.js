const express = require('express');
const { route } = require('../apiServices/commerce/routes');
const commerce = require('../apiServices/commerce/routes');
const router = express.Router();


//router.use('/tiendas/listado', commerce);
router.use('/tiendas', commerce);
//router.route('/')
//router.post('/', commerce);



module.exports = router;