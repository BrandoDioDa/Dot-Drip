const express = require('express');
const expressRouter = express.Router();
const coupons = require('../model/coupon');

//Get coupon information
expressRouter.get('/:coupon', async (req, res) => {
    const { coupon } = req.params;
    const singleEntry = await coupons.findOne({codeName: String(coupon)});
    console.log("singleentry", singleEntry);
    try {
        if ( singleEntry !== null && singleEntry !== 'undefined') {
            return res.status(200).json(singleEntry)
        }
        else {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({message: "Unable to get coupon"});
    }
})

//Insert a new coupon
expressRouter.post('/add/:code/:amount', async (req, res) => {
    const createUser = await users.create(req.body)
    try {
        return res.status(201).json(createUser);
    } catch (error) {
        return res.status(500).json({message: "Unable to create coupon"});
    }
})

module.exports = expressRouter;