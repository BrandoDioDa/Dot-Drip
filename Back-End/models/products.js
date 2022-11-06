let mongoose = require('mongoose')

const { model, Schema } = mongoose;

let productSchema = Schema (
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

module.exports = model('products', productSchema)