const mongoose = require('mongoose'); 
const express = require('express'); 
const cors = require('cors');
const dotenv = require('dotenv'); 

const testEmpleados = require('./backend/controllers/empleados.controller.js');
const testClientes = require('./backend/controllers/clientes.controller.js');
const testGerentes = require('./backend/controllers/gerentes.controller.js');
const testProductos = require('./backend/controllers/productos.controller.js');
const testPromociones = require('./backend/controllers/promociones.controller.js');

dotenv.config();

mongoose.connect(process.env.url)
.then(() => {
    console.log("La conexión fue exitosa");
})
.catch((err) => {
    console.log("Falló la conexión");
});

const app = express();
app.use(cors());

app.listen(4500, () => {
    console.log("No fue escuchado");
});

testClientes();
testEmpleados();
testGerentes();
testProductos();
testPromociones();
