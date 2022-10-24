
const express = require('express')
const app = express()

const ConnectionStatus = require('../db/connection') // import connection to a database
app.use(express.json())

const connection = ConnectionStatus.state

const auth_router = require("./Routes/authentication.routes")
if(connection == 2) {
    app.use('/app', auth_router)
}

const blogsRouter = require("./Routes/blog.routes")
if(connection == 2) {
    app.use('/app', blogsRouter)
}
//app.use("/app/auth", auth_router)

module.exports = app //export the app