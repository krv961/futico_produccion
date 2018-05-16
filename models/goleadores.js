const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goleoSchema = new Schema({
    nombre: String,
    goles: {type: Number},
    equipo: String,
    pie: {type:Number},
    cabeza: {type: Number},
    falta: {type: Number},
    penal: {type: Number}
   
});

module.exports = mongoose.model('goleo', goleoSchema, 'goleadores');

