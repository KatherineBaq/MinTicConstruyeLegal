const express = require('express');
const router = express.Router();
const {getLicenciasByQuery} = require('../db/crudLicencias');

router.get('/', (req, res) => {
    const {noacto, matriculainmobiliaria, cedcatastrales, uso} = req.body;
    getLicenciasByQuery(noacto, matriculainmobiliaria, cedcatastrales, uso,licencias => {
        res.json(licencias);
    });
});

module.exports = router;