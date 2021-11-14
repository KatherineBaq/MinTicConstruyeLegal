const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./config/index.js');

const app = express();

app.use(express.json());

// models

app.listen(Config.port, () => {
    debug('Servidor escuchando en el puerto '+ Config.port);

});