const axios = require('axios'); //esto es un import, le digo a node q me traiga axios para usarla cdo necesite
const { getLocationByIp } = require('./locationService');

const API_KEY = process.env.OPENWEATHER_API_KEY; //escribo en mayusc por convencion pq es una const de configuracion,  process.env leera la variable del archivo .env asi la clave no quede escrita en mi codigo
const BASE_URL = 'http://api.openweathermap.org/data/2.5'; //guarda la url base q se repetira en todos lso endpoints por si llegase a cambiar asi la modifico solo desde aqui 

const getCurrentWeather = async (city) => {

    if (!city) {
        const location = await getLocationByIp();
        city = location.city //si no hay ciudad llama a getLocationByIp para detectar la ubi por ip y agarra solo la propiedad city de la resp
    }

    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await axios.get(url);
    return response.data; //response tiene toda la resp de axios y el .data es lo que nos importa porque son los datos reakes del clima en json
};

module.exports = { getCurrentWeather }; // exporto la funcion para que otros archivos la puedan usar