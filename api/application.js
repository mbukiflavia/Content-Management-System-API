const express = request ('express')
const app = express()

const router = express.router()

app.get('/:paramName', (req, res, next) => {
    const {paramName} = req.params

    res.status(200).json({
        message: 'Hello,' + paramName
    })
})

module.exports = app