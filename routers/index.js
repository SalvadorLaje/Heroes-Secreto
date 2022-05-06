const router = require('express').Router()
const HeroController = require('../controllers/HeroController')

router.get('/', HeroController.index)
router.get('/detalle/:heroe', HeroController.detalle)

module.exports= router