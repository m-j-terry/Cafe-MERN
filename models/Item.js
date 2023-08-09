const mongoose = require('mongoose')
require('./category')

const itemSchema = require('./temSchema')

module.exports = mongoose.model('Item', itemSchema)