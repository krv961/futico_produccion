const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goleoSchema = new Schema({

    id: String,
    nombre: String,
    goleadores:[]
    
   
});

module.exports = mongoose.model('goleadores', goleoSchema, 'goleadores');

