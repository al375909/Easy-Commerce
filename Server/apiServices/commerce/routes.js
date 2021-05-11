const express = require('express');
const controller = require('./controller');


const router = express.Router();


router.get('/' , controller.getCommerce);
// router.post('/signup', controller.createCommerce);
// router.get('/signin', controller.loginCommerce);
router.get('/:id/products', controller.getProducts);
router.post('/products', controller.addProduct);


//router.post('/:id', controller.createCommerce());

module.exports = router;
