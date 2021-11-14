
// models

const express = require('express');
const debug = require('debug')('app:main');

const app = express();

app.use(express.json());

app.use('/api/v1/', require('./routes/LicenciasRouter.js'));

app.listen(3000, () => {
    debug('Servidor escuchando en el puerto 3000');
});