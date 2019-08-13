//const express = require('express');
const router = require('express-promise-router')();

const { index , 
    newItem, 
    getItem, 
    replaceItem, 
    deleteItem,
    existeItem,
    recuperarItem
} = require('../controllers/item');

router.get('/', index);
router.post('/',newItem);

router.get('/:itemId', recuperarItem);
router.put('/:itemId', replaceItem);
router.delete('/:itemId', deleteItem);
router.get('/existe/:itemId', existeItem);

module.exports = router;