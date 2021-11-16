const admin = require("firebase-admin");

const serviceAccount = require("./minticcontruyelegal-b87eb2083237.json");
const licencias = require("./LicenciaFusagasuga.json")


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


module.exports = db;
