const mongoose = require('mongoose')
require('./category')

const itemSchema = require('./ItemSchema')

module.exports = mongoose.model('Item', itemSchema)