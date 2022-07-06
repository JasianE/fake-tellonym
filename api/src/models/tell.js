const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TellSchema = new Schema({
    message: {type: String, required: true},
    date: {type: String, requireD: true}
})

module.exports = mongoose.model('Tell', TellSchema)