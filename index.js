require('dotenv').config(); //importa la libreria dotenv y llama la funcion config(), lee .env y carga las variables para que la app las pueda usar
const app = require('./src/app'); //siempre va a importar la app que cree en ese archivo

const PORT = process.env.PORT || 3000; //lee la var de entorno PORT del .env y si no la encuentra usa 3000 como valor por defecto

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    
});