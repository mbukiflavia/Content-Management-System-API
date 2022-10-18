
const express = require('express')
const app = express()

const userRoute = require("./Routes/user")
app.use("/app/user", userRoute)

const commentsRoute = require("./Routes/comments")
app.use("/app/comments", commentsRoute)

const signupRoute = require("./Routes/signup")
app.use("/app/signup", signupRoute)

module.exports = app