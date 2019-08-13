const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    idItem: String,
    descripcion : String,
    unidadMedida : String,
    inventarioTeorico: Number,
    inventarioFisico: Number,
    minimo: Number,
    precio: Number,
    activo: Boolean
});

module.exports = mongoose.model('item',itemSchema);