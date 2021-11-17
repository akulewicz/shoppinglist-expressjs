const Product = require('../db/models/product');

class ProductController {

    async showList(req, res) {
        const products = await Product.find({}) 
        res.render('pages/home', {
            products
        })
    }

    async addProduct(req, res) {
        
        const product = new Product({
            name: req.body.name
        })

        try {
            await product.save();
            res.redirect('/');
        } catch(e) {

        }

        
    }
}

module.exports = new ProductController();


