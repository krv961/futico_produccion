
const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Resultados = require('../models/resultados')


router.get('/lda', (req, res) => {
    Resultados.findOne({nombre: 'lda'},
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
    Resultados.findOne({nombre: 'carmelita'},
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
    Resultados.findOne({nombre: 'saprissa'},
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
    Resultados.findOne({nombre: 'herediano'},
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
    Resultados.findOne({nombre: 'liberia'},
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
    Resultados.findOne({nombre: 'pz'},
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
    Resultados.findOne({nombre: 'ucr'},
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
    Resultados.findOne({nombre: 'grecia'},
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
    Resultados.findOne({nombre: 'limon'},
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
    Resultados.findOne({nombre: 'guadalupe'},
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
    Resultados.findOne({nombre: 'cartagines'},
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
    Resultados.findOne({nombre: 'santos'},
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