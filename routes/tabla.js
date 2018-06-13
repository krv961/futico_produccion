const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Tabla = require('../models/tabla')
const route  = "https://api.sportradar.us/soccer-xt3/other/es/tournaments/sr:tournament:84/standings.json?api_key=wtm44z6e274xu7mva4kwjkry";


router.get(route, (req, res) => {
    
    
        }
)

module.exports = router