const express = require('express');
const authRouter = express.Router();
const users = require('../model/users');

// returns whether username/password match the database
authRouter.get('/', async (req, res) => {
    const Users = await users.find({'user':"grroink"});
    try {
        return res.status(200).json(Users);
    } catch (error) {
        return res.status(500).json({message: "Unable to get users"});
    }
})

//ADDS a product to the database
authRouter.post('/', async (req, res) => {
    console.log(req.body);
    const createUser = await users.create(req.body)
    try {
        return res.status(201).json(createUser);
    } catch (error) {
        return res.status(500).json({message: "Unable to create user"});
    }
})

module.exports = authRouter;