
// models

const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./config/index.js');

const app = express();

app.use(express.json());

console.log("Puerto: "+Config.port);

app.listen(Config.port, () => {
    debug('Servidor escuchando en el puerto '+ Config.port);

});