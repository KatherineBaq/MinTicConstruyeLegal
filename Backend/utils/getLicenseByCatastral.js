const db = require("../db/Conection");

exports.modules = async function getLicenseByCatastral(catastral, callback) {
  try {
    const doc = await db
      .collection("License")
      .where("cedcatastral", "==", catastral)
      .get();

    let arrayLicencias = [];
    doc.forEach((doc) => {
      arrayLicencias.push(doc.data());
    });
    callback(arrayLicencias);
  } catch (err) {
    callback(`Error to get license ${err}`);
  }
};
