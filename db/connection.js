require ('dotenv').config()
const mongoose = require ('mongoose')

const databaseURL = process.env.MONGODB_CLOUD

mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to App DB');
}).catch(error => {
    console.log(error.message)
});

const state = mongoose.connection.readyState
module.exports = { state }