const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const prodList = Schema ({
    prodType: {
        type: String,
        required: true
    },
    prodName: {
        type: String,
        required: true
    },
    prodPrice: {
        type: String,
        required: true
    },
    prodQuan: {
        type: Number,
        required: true
    },
    prodDesc: {
        type: String,
        required: true
    },
    prodImage: {
        type: String,
        required: true
    }
});

module.exports = model('prodList', prodList);