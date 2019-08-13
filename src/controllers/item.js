const Item = require('../models/item');
module.exports = {
    index: async (req, res, next) => {
        const items = await Item.find({});
        res.status(200).json(items);   
    },

    newItem: async (req, res, next) =>{
        const newItem = new Item(req.body);
        const item = await newItem.save();
        res.status(200).json({ success: true });
    },
    getItem:async (req, res, next) => {
        const { itemId } = req.params;
        const item = await Item.find({idItem : itemId});
        res.status(200).json(item);
    },
    //put
    replaceItem: async(req, res, next) => {
        const { itemId } = req.params;
        const newItem = req.body;
        const oldItem = await Item.findOneAndUpdate({idItem : itemId},newItem);
        res.status(200).json({ success: true });
    },
    /* updateItem: async (req, res, next) => {
        const {itemId} = req.params;
        const newItem = req.body;
        const oldItem = await Car.findOneAndUpdate(itemId, newItem);
        res.status(200).json({ succes:true });
    }, */
    deleteItem: async (req, res, next) => {
        const { itemId } = req.params;
        const item = await Item.findOneAndDelete({idItem : itemId});
        res.status(200).json({ success: true });
    },
    existeItem: async (req, res, next) => {
        const { itemId } = req.params;
        //const respuesta = await Item.findById(itemId);
        const respuesta = await Item.findOne({idItem : itemId});
        if(respuesta){
            res.status(200).json({ success: true });
        }     
        else{
            res.status(200).json({ success: false });
        }
    },
    recuperarItem: async (req, res, next) => {
        const { itemId } = req.params;
        const item = await Item.findOne({idItem : itemId});
        
        res.status(200).json(item);
        
    }

}