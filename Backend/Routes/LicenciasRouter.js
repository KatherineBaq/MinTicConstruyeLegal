const express = require('express');
const router = express.Router();
const { getLicenciasByQuery } = require('../db/crudLicencias.js');
const dbL = require('../db/crudLicencias.js');

// consulta varios atributos
router.get('/atr', (req, res) => {
    const { noacto, matriculainmobiliaria, cedcatastrales, uso } = req.body;
    getLicenciasByQuery(noacto, matriculainmobiliaria, cedcatastrales, uso, licencias => {
        res.json(licencias);
    });
});

//consultas tipicas http
router.get('/', function (req, res) {
    console.log("get all");
    dbL.getLicencias(function (arrayLicencias) {
        res.send(arrayLicencias);
    });
});

router.get('/:id', function (req, res) {
    console.log("get one");
    const lid = req.params.id;
    dbL.getLicencia(lid, function (license) {
        res.json(license);
    });
});

router.post('/', (req, res) => {
    const license = req.body;
    dbL.addLicencia(license, function (response) {
        res.send(response);
    });
});


// To get data from an open API

// router.post('/', (req, res) => {
//     const license = req.body;
//     const country = expert.location;
//     axios.get('https://restcountries.com/v3.1/name/' + country)
//         .then(function (response) {
//             expert.languages = response.data[0].languages;
//         })
//         .catch(function (error) {
//             res.status(404).send("Error to get country")
//         })
//         .then(function () {
//             dbE.addExpert(expert, function (response) {
//                 if(response == 'Expert created'){
//                     res.status(201).send(response);
//                 }else{
//                     res.status(400).send(response);
//                 }                
//             })
//         });
// })

router.put('/:id', (req, res) => {
    const lid = req.params.id;
    const license = req.body;
    dbL.updateLicenciaTotally(lid, license, function (response) {
        res.send(response);
    });
});

router.patch('/:id', (req, res) => {
    const lid = req.params.id;
    const license = req.body;
    dbL.updateLicenciaPartial(lid, license, function (response) {
        res.send(response);
    });
});

router.delete('/:id', (req, res) => {
    const lid = req.params.id;
    dbL.deleteLicencia(lid, function (response) {
        res.send(response);
    });
});

module.exports = router;