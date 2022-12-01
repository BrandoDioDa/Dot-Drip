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
        default: ""
    },
    cart: {
        type: [
            {
              type: Schema.Types.ObjectId,
              ref: "prodLists"
            },
            {
                quan: Number,
                default: 0,
            }
        ]
    },
    shippingInfo: { //Shipping info when checking out
        firstname: {
            type: String,
            required: true,
            default: ""
        },
        lastname: {
            type: String,
            required: true,
            default: ""
        },
        city: {
            type: String,
            required: true,
            default: ""
        },
        state: {
            type: String,
            required: true,
            default: ""
        },
        zipcode: {
            type: String,
            required: true,
            default: ""
        },
    },
    payment: {
        type:{
            type: String,
            required: true,
            default: ""
        },
        cardNum: {
            type: String,
            required: true,
            default: ""
        },
        nameOnCard: {
            type: String
        },
        securityNum: {
            type: String,
            required: true,
            default: ""
        },
        expDate: {
            type: String,
            required: true,
            default: ""
        },
        amount: {
            type: Number,
            required: true,
            default: ""
        }
    }
});

module.exports = model('checkout', checkoutSchema);