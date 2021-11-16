const db = require("../db/Conection");

module.exports = getAllLicense = (callback) => {
  return db
    .collection("Licence")
    .get()
    .then((refDoc) => {
      var arrayLicencias = [];
      refDoc.forEach((doc) => {
        arrayLicencias.push(doc.data());
      });
      callback(arrayLicencias);
    })
    .catch((err) => {
      callback(`Error to get licenses ${err}`);
    });
};
