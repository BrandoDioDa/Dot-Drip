const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const checkoutSchema = Schema ({
    account: { //The Account that is making the purchase
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    date: { //Date purchase was made
        type: Date,
        default: null
    },
    cart: {
        type: [
            {
              type: Schema.Types.ObjectId,
              ref: "prodLists"
            }
        ]
    },
    shippingInfo: { //Shipping info when checking out
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
    },
    payment: {
        type:{
            type: String,
            required: true
        },
        cardNum: {
            type: String,
            required: true
        },
        nameOnCard: {
            type: String
        },
        securityNum: {
            type: String,
            required: true
        },
        expDate: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
});

module.exports = model('checkout', checkoutSchema);