const express = require('express');

const router = new express.Router();
const ProductController = require('../controllers/product-controller');

router.get('/', ProductController.showList);
router.post('/list/product/add', ProductController.addProduct);

module.exports = router;