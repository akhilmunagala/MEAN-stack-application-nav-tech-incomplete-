const express = require('express');
const router = express.Router();

const orderController = require('../Controller/orderController');

router.post('/create', orderController.createOrder);
router.get('/list', orderController.getAllOrders);
router.delete('/delete/:id', orderController.deleteOrder);
router.put('/update/:id', orderController.updateOrder);

module.exports = router;