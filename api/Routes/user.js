const express = require("express")
const userRoute = express.Router()

userRoute.get('/:paramName', (req, res, next) => {
    const {paramName} = req.params
 
     res.status(200).json({
       message: 'Hello,' + paramName
     })
 })

module.exports = userRoute

