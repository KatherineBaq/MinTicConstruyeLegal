const db = require('./Conection.js');

// db.collection("Licencia").get()
//   .then((DocArray) => {
//     DocArray.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch((error) => {
//     console.log("Error getting documents: ", error);
//   });

//Get all licences from licence collection
function getLicencias(callback) {
  return db.collection('License').get()
      .then((refDoc) => {
          var arrayLicencias = [];
          refDoc.forEach((doc) => {
            arrayLicencias.push(doc.data());
          });
          callback(arrayLicencias);
      })
      .catch(err => {
          callback(`Error to get licenses ${err}`);
      });
}

function getLicencia(lid, callback) {
  return db.collection('License').doc(lid).get()
      .then((doc) => {
          callback(doc.data());
      })
      .catch((err) => {
          callback(`Error to get license ${err}`);
      });
}

function addLicencia(licencia, callback) {
  return db.collection('License').add(licencia)
      .then(() => {
          callback("License created");
      })
      .catch((err) => {
          callback(`Error to add license ${err}`);
      });
}

function updateLicenciaTotally(lid, licencia, callback) {
  return db.collection('License').doc(lid).set(licencia)
      .then(() => {
          callback("Success");
      })
      .catch((err) => {
          callback(`Error to update license ${err}`);
      });
}

function updateLicenciaPartial(lid, licencia, callback) {
  return db.collection('License').doc(lid).update(licencia)
      .then(() => {
          callback("Success");
      })
      .catch((err) => {
          callback(`Error to update license ${err}`);
      });
}

function deleteLicencia(lid, callback) {
  return db.collection('License').doc(lid).delete()
      .then(() => {
          callback("Success");
      })
      .catch((err) => {
          callback(`Error to delete license ${err}`);    
      });

}

//consulta de licencias por noacto, matriculainmobiliaria, cedcatastrales y uso
function getLicenciasByQuery(noacto, matriculainmobiliaria, cedcatastrales, uso, callback) {
    return db.collection('License').where('noacto', '==', noacto).where('matriculainmobiliaria', '==', matriculainmobiliaria).where('cedcatastrales', '==', cedcatastrales).where('uso', '==', uso).get()
        .then((refDoc) => {
            var arrayLicencias = [];
            refDoc.forEach((doc) => {
                arrayLicencias.push(doc.data());
            });
            callback(arrayLicencias);
        })
        .catch(err => {
            callback(`Error to get licenses ${err}`);
        });
}




function consultaLicenciasPorParametro(tipo, callback) {
        if (tipo == "tipo") {
            return db.collection('License').where('tipo', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "noacto") {
            return db.collection('License').where('noacto', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "barrio_urb") {
            return db.collection('License').where('barrio_urb', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "cedcatastrales") {
            return db.collection('License').where('cedcatastrales', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "noacto") {
            return db.collection('License').where('noacto', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "fecha") {
            return db.collection('License').where('fecha', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "matriculainmobiliaria") {
            return db.collection('License').where('matriculainmobiliaria', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "areapredio") {
            return db.collection('License').where('areapredio', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
        if (tipo == "aconstruir") {
            return db.collection('License').where('aconstruir', '==', tipo).get()
                .then((refDoc) => {
                    var arrayLicencias = [];
                    refDoc.forEach((doc) => {
                        arrayLicencias.push(doc.data());
                    });
                    callback(arrayLicencias);
                })
                .catch(err => {
                    callback(`Error to get licenses ${err}`);
                });
        }
}

module.exports = {
    getLicencias,
    getLicencia,
    addLicencia,
    updateLicenciaTotally,
    updateLicenciaPartial,
    deleteLicencia,
    consultaLicenciasPorParametro,
    getLicenciasByQuery,
    
};
