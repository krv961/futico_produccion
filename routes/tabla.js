
const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Tabla = require('../models/tabla')

router.get('/clasificacion', (req, res) => {
        Tabla.findOne({nombre: 'clasificacion'},
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

      router.get('/cuadrangular', (req, res) => {
        Tabla.findOne({nombre: 'cuadrangular'},
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

module.exports = router