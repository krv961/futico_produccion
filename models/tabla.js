const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tablaSchema = new Schema({

    id: String,
    nombre: String,
    posiciones:[]
});

module.exports = mongoose.model('tabla', tablaSchema, 'tabla');