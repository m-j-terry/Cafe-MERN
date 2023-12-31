const { Item } = require('../../models/item')

module.exports = {
    index, 
    show,
    findByName
}

async function index(req, res) {
    try {
        const items = await Item.find({}).sort('name').populate('category').exec()
        items.sort((a, b) => a.category.sortOrder - b.category.sortOrder)
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json({ msg: error.msg })
    }
}

async function show(req, res) {
    try {
        const item = await Item.findById(req.params.id)
        console.log("item found!: " + item)
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({ msg: error.msg })
    }
}

async function findByName(req, res) {
    try{ 
        console.log('controller')
        console.log(req.params.name)
        const foundItem = await Item.findOne({ name: req.params.name }).exec()
        res.status(200).json(foundItem)
    } catch(error) {
        res.status(400).json({ msg: error.msg })
    }
}