const ApiKey = require('../../models/apiKey')

module.exports = {
    post, 
    show
}

async function post(req, res) {
    try {
        const apiKey = await ApiKey.create(req.body)
        console.log(req.body)
        res.json(apiKey)
    } catch (error) {
        console.log('your database is toast')
        res.status(400).json(error)
    }
}

async function show(req, res) {
    try {
        const apiKey = await ApiKey.findById(req.params.id)
        console.log("apiKey found!: " + apiKey)
        res.json(apiKey)
    } catch (error) {
        res.status(400).json({ msg: error.msg })
    }
}