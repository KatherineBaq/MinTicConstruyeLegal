const db = require("../db/Conection");

exports.modules = getAllLicense = () => {
  return db
    .collection("License")
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
