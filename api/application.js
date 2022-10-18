
const express = require('express')
const app = express()

const userRoute = require("./Routes/user")
app.use("/app/user", userRoute)

const commentsRoute = require("./Routes/comments") // import the exported function
app.use("/app/comments", commentsRoute)

const auth_router = require("./Routes/authentication.routes")
app.use("/app/signup", auth_router)

module.exports = app //export the app