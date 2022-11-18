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

expressRouter.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    const singleProduct = await product.findById(id);
    try {
        return res.status(200).json(singleProduct)
    } catch (error) {
        return res.status(500).json({message: "Unable to get product"});
    }
})
module.exports = expressRouter;