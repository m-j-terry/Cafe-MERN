const express = require('express')
const router = express.Router()
const ordersCtrl = require('../../controllers/api/orders')

/* REMEMBER: routes send through /api/orders/ as their root */
// GET
router.get('/cart', ordersCtrl.cart)
// GET
router.get('/history', ordersCtrl.history)
// POST
router.post('/cart/items/:id', ordersCtrl.addToCart)
// POST
router.post('/cart/checkout', ordersCtrl.checkout)
// POST
router.put('/cart/qty', ordersCtrl.setItemQtyInCart)

module.exports = router