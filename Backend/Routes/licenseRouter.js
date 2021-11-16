const express = require("express");
const licenseRouter = express.Router();

const {
  searchController,
  getAllController,
  createLicenseController,
  deleteLicenseController,
} = require("../controllers/licenceController");

//all
licenseRouter.get("/", getAllController);

// consulta varios atributos
licenseRouter.get("/search", searchController);

//consultas tipicas http
licenseRouter.post("/", createLicenseController);

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

licenseRouter.delete("/:catastral", deleteLicenseController);

module.exports = licenseRouter;
