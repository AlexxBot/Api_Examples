const User = require('../models/user');
const Car = require('../models/cars');
module.exports = {

    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json({ result: "ok", users });   
    },

    newUser: async (req, res, next) =>{
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json({ result: "ok", user });
    },
    getUser:async (req, res, next) => {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(200).json({ result: "ok", user });
    },
    //put
    replaceUser: async(req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ succes:true });
    },
    //patch
    updateUser: async (req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ succes:true });
    },

    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        const oldUser = await User.findByIdAndDelete(userId);
        res.status(200).json({ succes:true });
    },

    getUserCars:async (req, res, next) => {
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
    }
}