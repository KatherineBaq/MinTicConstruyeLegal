const express = require('express');
const debug = require('debug')('app:main');
const APIRoutes = require('./Routes/indexRoutes.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
APIRoutes(app);

//app.use('/api/v1/', require('./routes/LicenciasRouter.js'));

app.listen(port, () => {
    console.log('My port ' + port);
});