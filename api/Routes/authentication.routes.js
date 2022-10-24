const express = require ('express')
const auth_router = express.Router()


const DatabaseModels = require('../../db/schemas') //import all database schemas
const UserModel = DatabaseModels.usersModel //import UserModel exported in the database Schema


auth_router.post('/register', (req, res, next) => {
    const { email, username, password } = req.body
    
    if (email != null || username != null || password != null) {
        const newUser = new UserModel({
            name: username,
            email: email,
            password: password
        })

        newUser.save()
        .then(savedUser => {
            res.status(201).json({
                responseMessage: 'You have registered successfully',
                user: username
            })
        })
        .catch(error => {
            res.status(400).json({
                errorMessage: error
            })
        })

    } else {
        res.status(404).json({
            error: 'All fields are required!'
        })
    }
})

auth_router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    res.status(200).json({
        message: 'Thank you for registering.',
        data: {
            name: authName,
            email: authEmail,
            password: authPassword
        }

        })
})


module.exports = auth_router