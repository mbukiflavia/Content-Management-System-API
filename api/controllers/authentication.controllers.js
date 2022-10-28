const bcrypt = require('bcryptjs')
const { model } = require('mongoose')
 
const DatabaseModels = require('../../db/schemas') //import all database schemas
const UserModel = DatabaseModels.usersModel //import UserModel exported in the database Schema


const authenticationController = (req, res, next) => {
    const { email, username, password } = req.body

    console.log(email + "\n" + username + "\n" + password)
    UserModel.findOne({ email:email })
        .exec()
        .then(accountExists => {
            if (accountExists != null) {
                res.status(500).json({
                    error: 'Authentication failed!' //As a security measure, don't define errors in error messages
                })
            } else {
                bcrypt.genSalt(15, (saltError, saltValue) => {
                    if (saltError) {
                        res.status(500).json({
                            message: 'Authentication failed!'
                        })
                    } else {
                        bcrypt.hash(password, saltValue, (hashError, hashValue) => {
                            if (hashValue) {
                                const newUser = new UserModel({
                                    name: username,
                                    email: email,
                                    password: hashValue
                                    
                                })

                                newUser.save() //save new user to db
                                .then(savedUser => {
                                    res.status(201).json({
                                        responseMessage: 'You have registered successfully',
                                        user: username,
                                        password: hashValue
                                    })
                                })
                                .catch(error => {
                                    res.status(400).json({
                                        errorMessage: error
                                    })
                                })
                            } else {
                                res.status(500).json({
                                    message: 'Authentication failed!'
                                })
                            }
                        })
                    }
                })
            }
        })
    
        .catch( error => {
            res.status(400).json({
                error: error.message
            })
        })

}

const loginController = (req, res, next) => {
    const { email, password } = req.body
    console.log(email + "\n" + password)

    UserModel.findOne({ email: email})
        .exec()
        .then(accountExists => {
            if (accountExists != null) {
                const hashedPassword = accountExists.password
                bcrypt.compare(password, hashedPassword, (hashError, hashValue) => {
                    if (hashValue) {
                        res.status(200).json(accountExists)
                    } else {
                        res.status(500).json({
                            error: "Authentication Failed!"
                        })
                    }
                })
            } else {
                
            }
        })
        .catch( error => {
            res.status(500).json({
                error: error.message
            })
        })

    
}

const updatePassword = (req, res, next) => {
    const { userID, password } = req.body

    UserModel.findOne({ _id: userID })
        .exec()
        .then(accountExists => {
            if (accountExists != null) {
                bcrypt.genSalt(15, (err, salt) => {
                    if (salt) {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if(hash){
                                UserModel.findOneAndUpdate({ _id: userID}, { $set: { password : hash } }, { new : true })
                        .exec()
                        .then(updateValue => {
                            res.status(200).json(updateValue)
                        })
                        .catch( error => {
                            res.status(500).json({
                                error: 'error:' + error.message
                            })
                        })

                            }
                        })
                        
                    } else {
                        res.status(500).json({
                            error: "Error: password reset failed! "
                        })
                    }
                })
            } else {
                res.status(500).json({
                    error: "Error: password reset failed! "
                })
            }
        })
        .catch( error => {
            res.status(500).json({
                error: error.message
            })
        })
}

module.exports = {
    authenticationController,
    loginController,
    updatePassword
}
       
        

      