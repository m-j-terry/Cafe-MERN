const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } =  require('../../controllers/api/users')
const { ensureLoggedIn } = require('../../config/ensureLoggedIn')
/* REMEMBER: all routes send to /api/users/ as the root */

// POST
router.post('/', dataController.create, apiController.auth)
// POST
router.post('/login', dataController.login, apiController.auth)
// GET /
router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router