const db = require("../db/Conection");
module.exports = async function deleteLicense(catastral, callback) {
  try {
    await db.collection("Licence").doc(catastral).delete();
    callback("Success");
  } catch (err) {
    callback(`Error to delete license ${err}`);
  }
};
