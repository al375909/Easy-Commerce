const express = require('express');
const controller = require('./controller');


const router = express.Router();


router.get('/' , controller.getCommerce);
// router.post('/signup', controller.createCommerce);
// router.get('/signin', controller.loginCommerce);
router.get('/:id/products', controller.getProducts);
router.post('/addProduct', controller.addProduct);
router.post('/updateProduct', controller.updateProduct);
router.post('/deleteProduct', controller.deleteProduct);



//router.post('/:id', controller.createCommerce());

module.exports = router;
