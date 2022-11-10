let mongoose = require('mongoose')


let productSchema = new mongoose.Schema (
    {
    prodName: {
        type: String,
        required: true
    },
    prodType: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})
const productModel = mongoose.model('products', productSchema);

module.exports = productModel;