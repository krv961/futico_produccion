const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jornadasSchema = new Schema({

    id: String,
    nombre: String,
    periodo: String,
    final1: [],
    final2: [],
    cuadrangular1: [],
    cuadrangular2: [],
    cuadrangular3: [],
    cuadrangular4: [],
    cuadrangular5: [],
    cuadrangular6: [],
    jornada1: [], jornada2: [], jornada3: [], jornada4: [], jornada5: [], jornada6: [], jornada7: [], 
    jornada8: [], jornada9: [], jornada10: [], jornada11: [], jornada12: [], jornada13: [], jornada14: [], 
    jornada15: [], jornada16: [], jornada17: [], jornada18: [], jornada19: [], jornada20: [], 
    jornada21: [], jornada22: []
});

module.exports = mongoose.model('jornadas', jornadasSchema, 'jornadas');
