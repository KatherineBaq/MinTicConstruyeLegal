const routerLicenses = require('./LicenciasRouter.js');
const routerAdmins = require('./AdministradorRouter.js');
//const routerMockExperts = require('./mockExpertsRoutes.js');

function APIRoutes(app){
    app.use('/licenses', routerLicenses);
    app.use('/admins', routerAdmins);
    //app.use('/mock/experts', routerMockExperts);    
}

module.exports = APIRoutes;



