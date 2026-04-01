require('dotenv').config();

const request = require('supertest');
const app = require('../src/app'); //Supertest necesita mi app para poder probarla y hacerle requests

describe('Location endpoint', () => {

    it('should return 200 and a city', async () => {
        const response = await request(app).get('/v1/location'); //supertest llma a mi api en el endpoint y guarda la respuesta
        expect(response.status).toBe(200); //"espera a que el status sea 200"
        expect(response.body.city).toBeDefined(); //"espera que el campo city exista en la respuesta, que NO sea undefined"
    });

});

describe('Current weather endpoint', () => {

    it('should return 200 and temperature', async () => {
        const response = await request(app).get('/v1/current/Ezeiza');
        expect(response.status).toBe(200);
        expect(response.body.main.temp).toBeDefined();
    });

    it('should return weather for a specific city', async () => {
        const response = await request(app).get('/v1/current/London');
        expect(response.status).toBe(200);
        expect(response.body.main).toBeDefined();
    });

});

describe('Forecast endpoint', () => {

    it('should return 200 and a city', async () => {
        const response = await request(app).get('/v1/location');
        expect(response.status).toBe(200);
        expect(response.body.city).toBeDefined();
    }, 10000);

});