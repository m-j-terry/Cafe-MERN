const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apiKeySchema = new Schema({ 
    apiKey: String
}, {
})

module.exports = mongoose.model('ApiKey', apiKeySchema)