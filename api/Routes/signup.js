const express = require('express')
const signupRoute = express.Router()

signupRoute.get("/", (req, res, next) => {

    res.status(200).json({
        message: 'The SignUp route is working.'
        })
})

module.exports = signupRoute
