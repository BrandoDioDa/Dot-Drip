const express = require('express');
const expressRouter = express.Router();
const prod = require('../model/products');

//Get all items
expressRouter.get('/', async (req, res) => {
    const product = await prod.find();
    console.log(product);
    try {
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({message: "Unable to get products"});
    }
})

module.exports = expressRouter;