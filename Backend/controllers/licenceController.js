const db = require("../db/Conection");
const getLicenseByQuery = require("../utils/getLicenseByQuery");
const deleteLicense = requiere("../utils/deleteLicense.js");
const getLinceseByCatastral = require("../utils/getLicenseByCatastral");
const getAllLicense = require("../utils/getAllLicense");

const searchController = (req, res) => {
  const query = req.query;

  getLicenseByQuery(query, (licencias) => {
    res.json(licencias);
  });
};

const getAllController = function (req, res) {
  getAllLicense(function (arrayLicencias) {
    res.send(arrayLicencias);
  });
};

const createLicenseController = (req, res) => {
  const license = req.body;
  addLicencia(license, function (response) {
    res.send(response);
  });
};

const deleteLicenseController = (req, res) => {
  const { catastral } = req.params;
  deleteLicense(catastral, function (response) {
    res.send(response);
  });
};

//++++++++++++++++++++++++Getters+++++++++++++++++++++++++++++++++++++

// async function getAllLicenses(callback) {
//   try {
//     const refDoc = await db.collection("Licencia").get();
//     var arrayLicencias = [];
//     refDoc.forEach((doc) => {
//       arrayLicencias.push(doc.data());
//     });
//     callback(arrayLicencias);
//   } catch (err) {
//     callback(`Error to get licenses ${err}`);
//   }
// }
//++++++++++++++++++++++++By ID+++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++Add+++++++++++++++++++++++++++++++++++++
async function addLicense(licencia, callback) {
  try {
    await db.collection("Licencia").add(licencia);
    callback("License created");
  } catch (err) {
    callback(`Error to add license ${err}`);
  }
}

//++++++++++++++++++++++++Update+++++++++++++++++++++++++++++++++++++
async function updateLicense(catastral, licencia, callback) {
  try {
    await db.collection("Licencia").doc(catastral).update(licencia);
    callback("Success");
  } catch (err) {
    callback(`Error to update license ${err}`);
  }
}

//++++++++++++++++++++++++Delete+++++++++++++++++++++++++++++++++++++

module.exports = {
  searchController,
  getAllController,
  createLicenseController,
  deleteLicenseController,
  addLicense,
};
