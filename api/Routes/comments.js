const express = require("express")
const commentsRoute = express.Router()

commentsRoute.get("/", (req, res, next) => {

    res.status(200).json({
        message: 'The comments route is working.'
        })
})

module.exports = commentsRoute