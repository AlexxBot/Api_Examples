const Order = require('../models/order');
module.exports = {

    index: async (req, res, next) => {
        const orders = await Order.find({});
        res.status(200).json(orders);   
    },

    newOrder: async (req, res, next) =>{
        const newOrder = new Order(req.body);
        const order = await newOrder.save();
        res.status(200).json(order);
    },
    getOrder:async (req, res, next) => {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        res.status(200).json(order);

    },
    //put
    replaceOrder: async(req, res, next) => {
        const { orderId } = req.params;
        const newOrder = req.body;
        const oldOrder = await Order.findByIdAndUpdate(orderId, newOrder);
        res.status(200).json({ succes:true });
    },
    //patch
    /*updateCar: async (req, res, next) => {
        const {carId} = req.params;
        const newCar = req.body;
        const oldCar = await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ succes:true });
    },*/

    deleteOrder: async (req, res, next) => {
        const { orderId } = req.params;
        const order = await Order.findByIdAndDelete(orderId);
        res.status(200).json({ succes:true });
    }

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