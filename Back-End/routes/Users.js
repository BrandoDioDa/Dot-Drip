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

usersRouter.get('/users/:username', async (req, res) => {
    const singleEntry = await users.findOne({ name: String(req.params.username) });
    console.log(singleEntry);
    try {
        return res.status(200).json(singleEntry)
    } catch (error) {
        return res.status(500).json({message: "Unable to get user"});
    }
})

//Get item by username, returns whether it exists and returns a status number. USE ONLY FOR CHECKING IF USERNAME EXISTS
usersRouter.get('/users/username/:username', async (req, res) => {
    const singleEntry = await users.findOne({ name: String(req.params.username) });
    console.log(singleEntry);
    try {
        if ( singleEntry === null ) {
            return res.status(204).json();
        }
        else {
            return res.status(200).json();
        }
    } catch (error) {
        return res.status(500).json({message: "Unable to get user"});
    }
})

// returns whether username/password match the database
usersRouter.get('/auth/:username/:password', async (req, res) => {
    const Users = await users.findOne({name: String(req.params.username), password: String(req.params.password)});
    console.log("This is users",Users);
    // create User token
    try {
        if ( Users ) {
            if ( Users.password === String(req.params.password) ) {
                console.log("Logging in");
                return res.status(200).json({username: Users.name, role: Users.role});          //Passwords match, log in
            }
            else {
                console.log("Login failed");
                return res.status(204).json();          //Passwords do not match
            }
        }
        else {
            console.log("nothing returned from Server");
        }
    } catch (error) {
        console.log("Error");
        return res.status(500).json({message: "Unable to get users"});
    }
})

// checks that the user requested is an admin
usersRouter.get('/auth/:username/', async (req, res) => {
    const Users = await users.findOne({name: String(req.params.username)});
    try {
        if ( Users ) {
            if ( Users.role === "ADMIN" ) {
                return res.status(200).json({verified: true});          //Passwords match, log in
            }
            else {
                console.log("Login failed");
                return res.status(200).json({verified: false});          //Passwords do not match
            }
        }
        else {
            return res.status(204).json();
        }
    } catch (error) {
        console.log("Error");
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