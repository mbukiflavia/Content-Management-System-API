const express = require ('express')
const auth_router = express.Router()

auth_router.post('./login', (req, res, next) => {

    const { authEmail, authPassword } = req.body

    res.status(200).json({
        message: 'Welcome.',
        data: {
            email: authEmail,
            password: authPassword
        }

        })
})

auth_router.get('./signup', (req, res, next) => {

    const { authName, authEmail, authPassword } = req.body

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