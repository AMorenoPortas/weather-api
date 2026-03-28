const express = require('express'); //traeme express para usarlo aca
const app = express(); //instancia de mi API, crea la app, llamamos a la func express() creando la app web y la guardamos en la variable app. de aqui en mas todo lo que configure la API  o hace a traves de app

app.use(express.json()); //middleware, quiere decir que siempre interprete como JSON todos los datos que reciba

const locationRoutes = require('./routes/location'); //importa las rutas de location
app.use('/v1', locationRoutes); //todas las rutas de locationRoutes las pone bajo el prefijo /v1, por eso el endpoint final queda /v1/location

module.exports = app; //como decir "esto esta dispo para quien lo necesite"