const express = require('express');
const expressRouter = express.Router();
const product = require('../model/products');

//Get all items
expressRouter.get('/', async (req, res) => {
    const product1 = await product.find();
    console.log(product1);
    try {
        return res.status(200).json(product1)
    } catch (error) {
        return res.status(500).json({message: "Unable to get products"});
    }
})

//Get item by product id
expressRouter.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const singleProduct = await product.findById(id);
    try {
        return res.status(200).json(singleProduct)
    } catch (error) {
        return res.status(500).json({message: "Unable to get product"});
    }
})

//ADDS a product to the database
expressRouter.post('/add', async (req, res) => {
    const createProduct = await product.create(req.body)
    try {
        return res.status(201).json(createProduct);
    } catch (error) {
        return res.status(500).json({message: "Unable to create product"});
    }
})

//DELETE by product id
expressRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await product.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "Product successfully deleted"})
    } catch (error) {
        return res.status(500).json({message: "Unable to delete product"});
    }
})
module.exports = expressRouter;