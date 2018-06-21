
const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Jornadas = require('../models/jornadas')

router.get('/', (req, res) => {
    Jornadas.findOne({nombre: 'jornadas'},
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