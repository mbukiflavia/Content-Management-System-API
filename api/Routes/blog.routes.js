const express = require ('express')
const blogsRouter = express.Router()

const DatabaseModels = require('../../db/schemas') //import all database schemas
const postModel = DatabaseModels.postsModel //import UserModel exported in the database Schema


blogsRouter.post('/post', (req, res, next) => {
    const { author, title, body } = req.body
    
    if (author != null || title != null || body != null) {
        const newPost = new postModel({
            author: author,
            title: title,
            body: body
        })

        newPost.save()
        .then(savedPost => {
            res.status(201).json({
                responseMessage: 'You have created a new post',
                author: author
            })
        })
        .catch(error => {
            res.status(400).json({
                errorMessage: error
            })
        })

    } else {
        res.status(404).json({
            error: 'All fields are required!'
        })
    }
})


module.exports = blogsRouter