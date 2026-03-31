const { getLocationByIp } = require('../services/locationService');

const getLocation = async (req, res) => { //define la func del controller
  try {
    const location = await getLocationByIp(); //llamo al servicio y espero la resp del clima de la ciudad que pidan
    res.json(location); //respuesta en formato json
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ubicación' });
  }
};

module.exports = { getLocation };