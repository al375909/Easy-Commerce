const express = require('express');
const controller = require('./controller');


const router = express.Router();


// router.get('/' , controller.getCommerce);
// router.post('/signup', controller.createCommerce);
// router.get('/signin', controller.loginCommerce);
router.get('/order', controller.getOrder);
router.get('/listOrders', controller.getOrders);
router.post('/order', controller.addOrder);


module.exports = router;
