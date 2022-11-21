const express = require('express');
const usersRouter = express.Router();
const users = require('../model/users');

//Get all items
usersRouter.get('/', async (req, res) => {
    const Users = await users.find();
    try {
        return res.status(200).json(Users)
    } catch (error) {
        return res.status(500).json({message: "Unable to get users"});
    }
})

//Get item by product id
usersRouter.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const singleEntry = await users.findById(id);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get user"});
    }
})

//ADDS a product to the database
usersRouter.post('/users/add', async (req, res) => {
    const createUser = await users.create(req.body)
    try {
        return res.status(201).json(createUser);
    } catch (error) {
        return res.status(500).json({message: "Unable to create user"});
    }
})

//DELETE by product id
usersRouter.delete('/users/delete/:id', async (req, res) => {
    const { id } = req.params;
    await users.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "user successfully deleted"})
    } catch (error) {
        return res.status(500).json({message: "Unable to delete user"});
    }
})
module.exports = usersRouter;