
const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Team = require('../models/equipo')
const Eventt = require('../models/event')


router.get('/lda', (req, res) => {
    Team.findOne({nombre: 'Liga Deportiva Alajuelense'},
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

router.get('/events', (req, res) => {
    Eventt.find((error, event) => {
        if (error) {
            console.log(error)
        } else {
            if (!event) {
                res.status(401).send('No users')
            } else
                res.status(200).send(event)
                }
            })
    
        }
)

module.exports = router