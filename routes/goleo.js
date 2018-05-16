
const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Goleo = require('../models/goleadores')


router.get('/', (req, res) => {
    Goleo.find((error, goles) => {
        if (error) {
            console.log(error)
        } else {
            if (!goles) {
                res.status(401).send('No goles')
            } else
                res.status(200).send(goles)
                }
            })
    
        }
)

router.get('/:equipo', (req, res) => {
    const nombre = req.params.equipo;
    console.log("nombre : " + nombre)
    Goleo.find({equipo: nombre})
      .exec()
      .then(doc => {
        //console.log("From database", doc);
        console.log('entra al goleo api');
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
    
        }
)

router.get('/jugador/:jugador', (req, res) => {
    const nombre = req.params.jugador;
    console.log("nombre : " + nombre)
    Goleo.findOne({nombre: nombre})
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
    
        }
)



module.exports = router