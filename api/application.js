
const express = require('express')
const app = express()


app.get('/:paramName', (req, res, next) => {
   const {paramName} = req.params

    res.status(200).json({
      message: 'Hello,' + paramName
    })
})

module.exports = app