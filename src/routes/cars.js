//const express = require('express');
const router = require('express-promise-router')();

const { index , newCar, getCar, replaceCar, deleteCar} = require('../controllers/car');

router.get('/', index);
router.post('/',newCar);

router.get('/:carId', getCar);
router.put('/:carId', replaceCar);
router.delete('/:carId', deleteCar);

//router.get('/:carId/cars', getUserCars);
//router.post('/:carId/cars', newUserCar);

module.exports = router;