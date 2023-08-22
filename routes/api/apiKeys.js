const express = require('express')
const router = express.Router()
const apiKeysCtrl = require('../../controllers/api/apiKeys')

/* REMEMBER: all routes send through /api/apiKeys/ as their root */
// GET
router.post('/', apiKeysCtrl.post)
// GET
router.get('/:id', apiKeysCtrl.show)

module.exports = router