const express = require("express");
const router = express.Router();
const {
  searchController,
  getAllController,
  createLicenseController,
  deleteLicenseController,
} = require("../controllers/licenceController");

//all
router.get("/", getAllController);

// consulta varios atributos
router.get("/search", searchController);

//consultas tipicas http
router.post("/", createLicenseController);

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

router.delete("/:catastral", deleteLicenseController);

module.exports = router;
