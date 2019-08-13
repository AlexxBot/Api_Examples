//const express = require('express');
const router = require('express-promise-router')();

const { index , 
    newOrder, 
    getOrder, 
    replaceOrder, 
    deleteOrder
} = require('../controllers/order');

router.get('/', index);
router.post('/',newOrder);

router.get('/:orderId', getOrder);
router.put('/:orderId', replaceOrder);
router.delete('/:orderId', deleteOrder);

module.exports = router;