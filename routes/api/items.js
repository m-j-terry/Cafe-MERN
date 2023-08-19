const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')

/* REMEMBER: all routes send through /api/items/ as their root */
// GET
router.get('/', itemsCtrl.index)
// GET
router.get('/:id', itemsCtrl.show)

// GET
router.get('/name/:name', itemsCtrl.findByName)

module.exports = router