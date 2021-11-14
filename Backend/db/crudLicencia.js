const db = require('./Conection.js');

db.collection("Licencia").get()
  .then((DocArray) => {
    DocArray.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

//  {
//     Concepto: 'urbanistica',
//     Fecha_Rad: '22/10/2021',
//     Nombres: 'FERNANDO',
//     'Radicación': 210562,
//     Ficha_Catastral: '01-01-00-00-0032-0024-0-00-00-0000',
//     Fecha_Exp: '03/11/2021',
//     Direccion: 'C 68 10A 03',
//     Apellidos: ' ESCOBAR BETANCURTH',
//     Solicitud: '21-2-0237-CN',
//     ID: 10245290
//   }