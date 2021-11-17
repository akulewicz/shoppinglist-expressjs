const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Musisz podać nazwę produktu'],
        trim: true
    },
    done: {
        type: Boolean,
        defalult: false
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
