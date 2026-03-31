const express = require('express');
const router = express.Router(); //solo maneja las rutas de este archivo

const { getLocation } = require('../controllers/locationController');

router.get('/location', getLocation); //define la ruta

module.exports = router; //exporta el router para que app.js lo pueda usar