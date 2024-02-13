const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    FullName: { type: String, required: false },
    Email: { type: String, required: true },
    Password: { type: String, required: true }
})
const User = mongoose.model('User', userScheme)
module.exports = { User }