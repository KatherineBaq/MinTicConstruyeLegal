const db = require("../db/Conection");

exports.modules = async function deleteLicense(catastral, callback) {
  try {
    await db.collection("Licencia").doc(catastral).delete();
    callback("Success");
  } catch (err) {
    callback(`Error to delete license ${err}`);
  }
};
