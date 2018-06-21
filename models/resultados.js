const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultadosSchema = new Schema({
    nombre: String,
    resultados: []
    
});

module.exports = mongoose.model('resultados', resultadosSchema, 'resultados');

