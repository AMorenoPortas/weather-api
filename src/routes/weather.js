const express = require('express');
const router = express.Router();

const { getWeather, getForecastWeather } = require('../controllers/weatherController')

router.get('/current', getWeather);  //dos rutas por endpoint xq /current (sin ciudad detecta por ip)
router.get('/current/:city', getWeather);                    // /current/:city (con ciudad usa la que el usuario escriba)
router.get('/forecast', getForecastWeather);
router.get('/forecast/:city', getForecastWeather);

module.exports = router; 

//usuario escribe la url 
//ruta reconoce esa url y la manda al controller 
//controller pide datos al service 
//service llama a la api externa (ip-api o openweathermap)
//la resp le llega al usuario en json