const mongoose = require('mongoose')

const linkScheme = new mongoose.Schema({
    Title: { type: String, required: false },
    Link: { type: String, required: true },
    Description: { type: String, required: false },
    UserId: { type: String, required: false }
})

const Link = mongoose.model('Link', linkScheme)
module.exports = { Link }