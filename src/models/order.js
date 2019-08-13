const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderDate: Date,
    orderNumber: Number,
    total: Number,
    description: String,
    isChecked: Boolean,
    buyer: {
        type: Schema.Types.ObjectId,
        ref:'user'
    }
});

module.exports = mongoose.model('order',orderSchema);