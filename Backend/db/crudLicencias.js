const db = require('./Conection.js');

db.collection("Licencia").get()
  .then((DocArray) => {
    DocArray.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

//Get all users from experts collection
function getLicencias(callback) {
  return db.collection('Licencia').get()
      .then((refDoc) => {
          var arrayLicencias = [];
          refDoc.forEach((doc) => {
            arrayLicencias.push(doc.data());
          })
          callback(arrayLicencias);
      })
      .catch(err => {
          callback(`Error to get licences ${err}`);
      })
}

function getLicencia(lid, callback) {
  return db.collection('Licencia').doc(lid).get()
      .then((doc) => {
          callback(doc.data())
      })
      .catch((err) => {
          callback(`Error to get licence ${err}`);
      })
}

function addLicencia(licencia, callback) {
  return db.collection('Licencia').add(licencia)
      .then(() => {
          callback("License created")
      })
      .catch((err) => {
          callback(`Error to add license ${err}`);
      })
}

function updateLicenciaTotally(lid, licencia, callback) {
  return db.collection('Licencia').doc(lid).set(licencia)
      .then(() => {
          callback("Success");
      })
      .catch((err) => {
          callback(`Error to update license ${err}`);
      })
}

function updateLicenciaPartial(lid, licencia, callback) {
  return db.collection('Licencia').doc(lid).update(licencia)
      .then(() => {
          callback("Success");
      })
      .catch((err) => {
          callback(`Error to update license ${err}`);
      })
}

function deleteLicencia(lid, callback) {
  return db.collection('Licencia').doc(lid).delete()
      .then(() => {
          callback("Success");
      })
      .catch((err) => {
          callback(`Error to delete license ${err}`);
      })
}

//Falta busqueda por lugar

module.exports = {
  getLicencias,
  getLicencia,
  addLicencia,
  updateLicenciaTotally,
  updateLicenciaPartial,
  deleteLicencia
}