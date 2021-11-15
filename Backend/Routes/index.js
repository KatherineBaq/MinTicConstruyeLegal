const routerLicenses = require('./LicenciasRouter.js');
//const routerUser = require('./userRoutes.js');
//const routerMockExperts = require('./mockExpertsRoutes.js');

function APIRoutes(app){
    app.use('/license', routerLicenses);
    //app.use('/users', routerUser);
    //app.use('/mock/experts', routerMockExperts);    
}

module.exports = APIRoutes;



