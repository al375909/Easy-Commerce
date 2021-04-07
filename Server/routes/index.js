const express = require('express');
const router = express.Router();
const commerce = require('../apiServices/commerce/routes');


//router.use('/tiendas/listado', commerce);
router.get('/tiendas/listado', (req, res) => {
    res.send("QUE DIUEENN");
});
//router.post('/', commerce);



module.exports = router;