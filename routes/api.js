
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

router.get('/carmelita', (req, res) => {
    Team.findOne({nombre: 'Asociación Deportiva Carmelita'},
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

router.get('/sap', (req, res) => {
    Team.findOne({nombre: 'Deportivo Saprissa'},
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

router.get('/csh', (req, res) => {
    Team.findOne({nombre: 'Club Sport Herediano'},
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

router.get('/lib', (req, res) => {
    Team.findOne({nombre: 'Municipal Liberia'},
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

router.get('/pz', (req, res) => {
    Team.findOne({nombre: 'Municipal Perez Zeledon'},
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

router.get('/ucr', (req, res) => {
    Team.findOne({nombre: 'Universidad De Costa Rica Futbol Club'},
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

router.get('/gre', (req, res) => {
    Team.findOne({nombre: 'Municipal Grecia'},
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

router.get('/lim', (req, res) => {
    Team.findOne({nombre: 'Limon Futbol Club'},
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

router.get('/gfc', (req, res) => {
    Team.findOne({nombre: 'Guadalupe Fútbol Club'},
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

router.get('/csc', (req, res) => {
    Team.findOne({nombre: 'Club Sport Cartagines'},
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

router.get('/san', (req, res) => {
    Team.findOne({nombre: 'Santos de Guapiles'},
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



