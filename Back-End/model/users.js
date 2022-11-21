const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const usersSchema = Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model('users', usersSchema);