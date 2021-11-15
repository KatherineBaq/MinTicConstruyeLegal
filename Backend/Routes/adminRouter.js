const express = require('express');
const router = express.Router();
const dbA = require('../db/crudAdministrador.js');

//consultas tipicas http
router.get('/', function (req, res) {
    dbL.arrayAdministradores(function (arrayAdministradores) {
        res.send(arrayAdministradores);
    })
});

router.get('/:id', function (req, res) {
    const aid = req.params.id;
    dbL.getAdministrador(aid, function (admin) {
        res.json(admin);
    })
})

router.post('/', (req, res) => {
    const admin = req.body;
    dbL.addAdministrador(admin, function (response) {
        res.send(response);
    })
})


router.put('/:id', (req, res) => {
    const aid = req.params.id;
    const admin = req.body;
    dbL.updateAdminsitradorTotally(aid, admin, function (response) {
        res.send(response);
    })
})

router.patch('/:id', (req, res) => {
    const aid = req.params.id;
    const admin = req.body;
    dbL.updateAdministradorPartial(aid, admin, function (response) {
        res.send(response);
    })
})

router.delete('/:id', (req, res) => {
    const aid = req.params.id;
    dbL.deleteAdmin(aid, function (response) {
        res.send(response);
    })
})

module.exports = router;