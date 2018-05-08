const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goleoSchema = new Schema({
    nombre: String,
    goles: {type: Number},
    equipo: String,
   
});

module.exports = mongoose.model('goleo', goleoSchema, 'goleadores');

