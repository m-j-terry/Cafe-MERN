const { model, Schema } = require('mongoose')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
require('./category')

const itemSchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
})

// const Item = mongoose.model('Item', itemSchema)


// module.exports = mongoose.model('Item', itemSchema)
module.exports = {
    itemSchema,
    Item: model('Item', itemSchema)
}