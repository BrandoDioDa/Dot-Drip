const express = require('express');
const expressRouter = express.Router();
const coupons = require('../model/coupon');

//Get item by product id
expressRouter.get('/:coupon', async (req, res) => {
    const { coupon } = req.params;
    const singleEntry = await coupons.findOne({codeName: String(coupon)});
    console.log(singleEntry);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get user"});
    }
})

module.exports = expressRouter;