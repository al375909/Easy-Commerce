const express = require('express');
const router = express.Router();
const commerce = require('../apiServices/commerce/routes');


//router.use('/tiendas/listado', commerce);
router.get('/tiendas/listado', commerce);
//router.post('/', commerce);



module.exports = router;