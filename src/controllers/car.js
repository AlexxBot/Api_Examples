const User = require('../models/user');
const Car = require('../models/cars');
module.exports = {

    index: async (req, res, next) => {
        const cars = await Car.find({});
        res.status(200).json({result:"ok",cars});   
    },

    newCar: async (req, res, next) =>{
        const newCar = new Car(req.body);
        const car = await newCar.save();
        res.status(200).json({result:"ok",car});
    },
    getCar:async (req, res, next) => {
        const {carId} = req.params;
        const car = await Car.findById(carId);
        res.status(200).json({result:"ok",car});

    },
    //put
    replaceCar: async(req, res, next) => {
        const {carId} = req.params;
        const newCar = req.body;
        const oldCar = await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ succes:true });
    },
    //patch
    updateCar: async (req, res, next) => {
        const {carId} = req.params;
        const newCar = req.body;
        const oldCar = await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ succes:true });
    },

    deleteCar: async (req, res, next) => {
        const {carId} = req.params;
        const Car = await Car.findByIdAndDelete(carId);
        res.status(200).json({ succes:true });
    },

    /*getUserCars:async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('cars');
        res.status(200).json(user);
    },

    newUserCar:async (req, res, next) => {
        const { userId } = req.params;
        const newCar= new Car(req.body);
        const user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(newCar);
    }*/
}