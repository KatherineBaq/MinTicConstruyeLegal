const admin = require('firebase-admin');

const serviceAccount = require('./minticconstruyelegal-267f7354629d.json');

//const serviceAccount = require('./minticconstruyelegal-73d5ec5dbb88.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;