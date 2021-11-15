const db = require('./Conection.js');

//Get all Adminsitrators from Administrator collection
function getAdministradores(callback) {
    return db.collection('Administrador').get()
        .then((refDoc) => {
            var arrayAdministradores = [];
            refDoc.forEach((doc) => {
                arrayAdministradores.push(doc.data());
            })
            callback(arrayAdministradores);
        })
        .catch(err => {
            callback(`Error to get Admins ${err}`);
        })
}

function getAdministrador(aid, callback) {
    return db.collection('Administrador').doc(aid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get Admin ${err}`);
        })
}

function addAdministrador(administrador, callback) {
    return db.collection('Administrador').add(administrador)
        .then(() => {
            callback("Admin created")
        })
        .catch((err) => {
            callback(`Error to add Admin ${err}`);
        })
}

function updateAdminsitradorTotally(aid, administrador, callback) {
    return db.collection('Administrador').doc(aid).set(administrador)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Admin ${err}`);
        })
}

function updateAdministradorPartial(aid, administrador, callback) {
    return db.collection('Administrador').doc(aid).update(administrador)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Admin ${err}`);
        })
}

function deleteAdmin(aid, callback) {
    return db.collection('Administrador').doc(aid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete Admin ${err}`);
        })
}

//Falta busqueda por lugar

module.exports = {
    getAdministradores,
    getAdministrador,
    addAdministrador,
    updateAdminsitradorTotally,
    updateAdministradorPartial,
    deleteAdmin
}