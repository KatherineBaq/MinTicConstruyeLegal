const db = require("./Conection.js");
//++++++++++++++++++++++++Getters+++++++++++++++++++++++++++++++++++++

async function getAllLicenses(callback) {
    try {
      const refDoc = await db.collection("Licencia").get();
      var arrayLicencias = [];
      refDoc.forEach((doc) => {
        arrayLicencias.push(doc.data());
      });
      callback(arrayLicencias);
    } catch (err) {
      callback(`Error to get licenses ${err}`);
    }
  }
  //++++++++++++++++++++++++By ID+++++++++++++++++++++++++++++++++++++
  
  async function getLicenseById(id, callback) {
      try {
          const doc = await db.collection("Licencia").doc(id).get();
          callback(doc.data());
        } catch (err) {
            callback(`Error to get license ${err}`);
        }
    }
    //++++++++++++++++++++++++By query+++++++++++++++++++++++++++++++++++++
    function getLicenseByQuery(...args, callback) {
        const [value,value2,value3] = args

    let whereRef;

    if (value) {
        whereRef = db.collection("Licencia").where("cedcatastrales", "==", value);
    }

    if (value2) {
        whereRef = whereRef.where("uso", "==", value2);
    }

    if (value3) {
        whereRef = whereRef.where("barrio_urb", "==", value3);
    }

    return whereRef
        .get()
        .then((refDoc) => {
        var arrayLicencias = [];
        refDoc.forEach((doc) => {
            arrayLicencias.push(doc.data());
        });
        callback(arrayLicencias);
        })
        .catch((err) => {
        callback(`Error to get licenses ${err}`);
        });
    }
    
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
  async function deleteLicense(catastral, callback) {
    try {
      await db.collection("Licencia").doc(catastral).delete();
      callback("Success");
    } catch (err) {
      callback(`Error to delete license ${err}`);
    }
  }

module.exports={
  getLicenseByQuery,
  getAllLicenses,
  getLicenseById,
  addLicense
};
