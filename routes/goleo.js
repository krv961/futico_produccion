
const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Goleo = require('../models/goleadores')


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

router.get('/', (req, res) => {
  Goleo.findOne({nombre: 'gol'},
  (error, team) => {
      if (error) {
          console.log(error)
      } else {
          if (!team) {
              res.status(401).send('No team')
          } else
              res.status(200).send(team)
              }
          })
  
      }
)

router.get('/:equipo', (req, res) => {
    const equipo = req.params.equipo;
    Goleo.find({goleadores:{equipo: 'LDA'}})
   // Goleo.find({'goleadores.nombre': 'LDA'})
      .exec()
      .then(doc => {
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