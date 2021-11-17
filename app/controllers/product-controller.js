const Product = require('../db/models/product');

class ProductController {

    showList(req, res) {
        res.render('pages/home')
    }

    addProduct(req, res) {
        console.log(req.body)
    }
}

module.exports = new ProductController();


