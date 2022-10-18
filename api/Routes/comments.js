const express = require("express") // import express
const commentsRoute = express.Router() // define the route function & initialize with express

commentsRoute.get("/", (req, res, next) => {

    res.status(200).json({
        message: 'The comments route is working.'
        })
})

module.exports = commentsRoute // export the route function to be used in application.js