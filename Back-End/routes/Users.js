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
usersRouter.get('/users/id/:id', async (req, res) => {
    const { id } = req.params;
    const singleEntry = await users.findById(id);
    console.log(singleEntry);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get user"});
    }
})

//Get item by username, returns whether it exists and returns a status number. USE ONLY FOR CHECKING IF USERNAME EXISTS
usersRouter.get('/users/username/:username', async (req, res) => {
    console.log(String(req.params.username));
    const singleEntry = await users.findOne({ name: String(req.params.username) });
    console.log(singleEntry);
    try {
        if ( singleEntry === null ) {
            return res.status(204).json({data: {message: "nf"}});
        }
        else {
            return res.status(200).json({data: {message: "nf"}});
        }
    } catch (error) {
        return res.status(500).json({message: "Unable to get user"});
    }
})

// returns whether username/password match the database
usersRouter.get('/auth/:username/:password', async (req, res) => {
    const Users = await users.findOne({name: String(req.params.username).trim(), password: String(req.params.password).trim()});
    try {
        if ( Users.password == String(req.params.password).trim() ) {
            console.log("Logging in");
            return res.status(200).json();          //Passwords match, log in
        }
        else {
            console.log("Login failed");
            return res.status(204).json();          //Passwords do not match
        }
    } catch (error) {
        return res.status(500).json({message: "Unable to get users"});
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