const Product = require('../db/models/product');

class ProductController {

    async showList(req, res) {
        const products = await Product.find({}) 
        res.render('pages/home', {
            products
        })
    }

    async addProduct(req, res) {
        const products = await Product.find({}) 
        const product = new Product({
            name: req.body.name
        })

        try {
            await product.save();
            res.redirect('/');
        } catch(e) {
            res.render('pages/home', {
                products,
                errors: e.errors
            })
        }

        
    }
}

module.exports = new ProductController();


