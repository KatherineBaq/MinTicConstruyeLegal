const db = require("../db/Conection");

module.exports = function getLicenseByQuery(query, callback) {
  let whereRef;
  let collecRef = db.collection("Licence");
  let isFirst = true;

  console.log(query);

  for (const [key, value] of Object.entries(query)) {
    console.log(key, value);
    if (isFirst) {
      whereRef = collecRef.where(key, "==", value);
    }
    if (!isFirst) {
      whereRef = whereRef.where(key, "==", value);
    }
    isFirst = false;
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
