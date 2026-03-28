const axios = require('axios'); //importo axios para llamar las apis externas

const getLocationByIp = async () => {
  const response = await axios.get('http://ip-api.com/json'); //espera a que se haga la solicitud get a ip-api y recien de una response con los datos obtenidos
  return response.data;
};
//va a esperar una respuesta de internet sin bloquear el resto de la app

module.exports = { getLocationByIp }; //exporta la función para que otros archivos la puedan usar