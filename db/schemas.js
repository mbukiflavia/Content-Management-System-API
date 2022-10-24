const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    verified: {
        type: Boolean,
        required: false
    }
})

const usersModel = mongoose.model('usersModel', userSchema)

const postsSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: false
    }
})

const postsModel = mongoose.model('postsModel', postsSchema)

module.exports = {
    usersModel,
    postsModel
}