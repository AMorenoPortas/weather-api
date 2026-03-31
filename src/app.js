const express = require('express'); //traeme express para usarlo aca
const app = express(); //instancia de mi API, crea la app, llamamos a la func express() creando la app web y la guardamos en la variable app. de aqui en mas todo lo que configure la API  lo hace a traves de app

app.use(express.json()); //middleware, quiere decir que siempre interprete como JSON todos los datos que reciba

const locationRoutes = require('./routes/location'); //importa las rutas de location
app.use('/v1', locationRoutes); //todas las rutas de locationRoutes ponelas (app.use) bajo el prefijo /v1 (version 1 de mi API), por eso el endpoint final queda /v1/location

const weatherRoutes = require('./routes/weather');
app.use('/v1', weatherRoutes);

module.exports = app; //como decir "esto esta dispo para quien lo necesite"'