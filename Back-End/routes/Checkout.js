const express = require('express');
const checkoutRouter = express.Router();
const checkout = require('../model/checkout');
const users = require("../model/users");

//Get all items
checkoutRouter.get('/', async (req, res) => {
    const Check = await checkout.find()
        .populate("cart", ["prodName", "prodDesc"])
        .populate("account", ["name", "role"]);
    try {
        return res.status(200).json(Check)
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchases"});
    }
})

//Get item by product id
checkoutRouter.get('/checkout/:id', async (req, res) => {
    const { id } = req.params;
    const singleEntry = await checkout.findById({ account: id });
    console.log(singleEntry);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchase"});
    }
})
//Gets information based off account id
checkoutRouter.get('/checkout/account/:id', async (req, res) => {
    const singleEntry = await checkout.findOne({ account: String(req.params.id) });
    console.log(singleEntry);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchase"});
    }
})

//Find matching productID
checkoutRouter.get('/checkout/cart/:id', async (req, res) => {
    const { id } = req.params;
    const singleEntry = await checkout.findById(id);
    console.log(singleEntry);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchase"});
    }
})

//ADDS a product to the database
checkoutRouter.post('/checkout/add', async (req, res) => {
    const createCheck = await checkout.create(req.body);
    try {
        return res.status(201).json(createCheck);
    } catch (error) {
        return res.status(500).json({message: "Unable to create purchase"});
    }
})

//Updates body of checkout document
checkoutRouter.put("/checkout/:id", async (req, res) => {
    const { id } = req.params;
    const checkoutToUpdate = await checkout.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(checkoutToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Can't update checkout id"})
    }
});
//Updates cart in checkout
checkoutRouter.put("/checkout/cart/:id", async (req, res) => {
    const { id } = req.params;
    const checkoutToUpdate = await checkout.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(203).json(checkoutToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Can't update checkout id"})
    }
});

//DELETE by product id
checkoutRouter.delete('/checkout/delete/:id', async (req, res) => {
    const { id } = req.params;
    await checkout.findByIdAndDelete(id);
    try {
        return res.status(204).json({message: "checkout successfully deleted"})
    } catch (error) {
        return res.status(500).json({message: "Unable to delete checkout"});
    }
})
module.exports = checkoutRouter;