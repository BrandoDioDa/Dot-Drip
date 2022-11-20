const express = require('express');
const checkoutRouter = express.Router();
const checkout = require('../model/checkout');

//Get all items
checkoutRouter.get('/', async (req, res) => {
    const Check = await checkout.find();
    try {
        return res.status(200).json(Check)
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchases"});
    }
})

//Get item by product id
checkoutRouter.get('/checkout/:id', async (req, res) => {
    const { id } = req.params;
    const singleEntry = await checkout.findById(id);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchase"});
    }
})

//ADDS a product to the database
checkoutRouter.post('/checkout/add', async (req, res) => {
    const createCheck = await checkout.create(req.body)
    try {
        return res.status(201).json(createCheck);
    } catch (error) {
        return res.status(500).json({message: "Unable to create purchase"});
    }
})

//DELETE by product id
checkoutRouter.delete('/checkout/delete/:id', async (req, res) => {
    const { id } = req.params;
    await checkout.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "checkout successfully deleted"})
    } catch (error) {
        return res.status(500).json({message: "Unable to delete checkout"});
    }
})
module.exports = checkoutRouter;