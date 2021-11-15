const express = require("express");
const router = express.Router();
const { getLicenseByQuery } = require("../controllers/licenceController");
const { getLicence } = require("../db/crudLicencias.js");

//all

router.get("/", function (req, res) {
  getLicence(function (arrayLicencias) {
    res.send(arrayLicencias);
  });
});

// consulta varios atributos

router.get("/:field/:value", (req, res) => {
  const { field, value } = req.params;
  getLicenseByQuery(value, (licencias) => {
    res.json(licencias);
  });
});

router.get("/:field/:value/:field2/:value2/", (req, res) => {
  const { value, value2 } = req.params;
  getLicenseByQuery(value, value2, (licencias) => {
    res.json(licencias);
  });
});

router.get("/:field/:value/:field2/:value2/:field3/:value3", (req, res) => {
  const { value, value2, value3 } = req.params;
  getLicenseByQuery(value, value2, value3, (licencias) => {
    res.json(licencias);
  });
});

//consultas tipicas http

router.post("/", (req, res) => {
  const license = req.body;
  dbL.addLicencia(license, function (response) {
    res.send(response);
  });
});

// router.put("/:id", (req, res) => {
//   const lid = req.params.id;
//   const license = req.body;
//   dbL.updateLicenciaTotally(lid, license, function (response) {
//     res.send(response);
//   });
// });

// router.patch("/:id", (req, res) => {
//   const lid = req.params.id;
//   const license = req.body;
//   dbL.updateLicenciaPartial(lid, license, function (response) {
//     res.send(response);
//   });
// });

router.delete("/:catastral", (req, res) => {
  const { catastral } = req.params;
  dbL.deleteLicencia(catastral, function (response) {
    res.send(response);
  });
});

module.exports = router;
