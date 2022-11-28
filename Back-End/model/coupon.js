const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const coupons = Schema ({
    codeName: {
        type: String,
        required: true
    },
    discountAmount: {
        type: Number,
        required: true
    }
});

module.exports = model('coupons', coupons);