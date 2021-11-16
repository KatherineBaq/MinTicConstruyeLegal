const db = require("../db/Conection");

exports.modules = function getLicenseByQuery(query, callback) {
  let whereRef;
  let collecRef = db.collection("Licencia");

  for (const [key, value] of Object.entries(query)) {
    whereRef = collecRef.where(key, "==", value);
  }

  return whereRef
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
