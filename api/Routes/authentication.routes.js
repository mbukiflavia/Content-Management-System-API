const express = require ('express')
const auth_router = express.Router()

const authController = require('../controllers/authentication.controllers')

auth_router.post('/register', authController.authenticationController)
auth_router.post('/login', authController.loginController)
auth_router.post('/update-password', authController.updatePassword)

module.exports = auth_router