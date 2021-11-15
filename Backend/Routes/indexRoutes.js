const routerLicenses = require('./LicenciasRouter.js');
const routerAdmins = require('./AdministradorRouter.js');

function APIRoutes(app){
    app.use('/licenses', routerLicenses);
    app.use('/admins', routerAdmins);
}

module.exports = APIRoutes;



