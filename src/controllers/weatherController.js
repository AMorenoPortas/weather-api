const { getCurrentWeather, getForecast } = require('../services/weatherService');

const getWeather = async (req, res) => {
    try {
        const weather = await getCurrentWeather(req.params.city); //dame el valor que el usuario puso en ese lugar de la URL
        res.json(weather);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el clima'})
    }
};

const getForecastWeather = async (req, res) => {
    try {
        const forecast = await getForecast(req.params.city);
        res.json(forecast);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el pronóstico' })
    }
};

module.exports = { getWeather, getForecastWeather };