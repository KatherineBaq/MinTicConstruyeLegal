import React, { useState } from "react";
import ItemLicencia from "./ItemLicence";

const Licence = ({ licencia }) => {
  const [open, setOpen] = useState(false);
  let classOpen =
    "bg-blue-400 rounded-b-2xl flex justify-around p-4 text-gray-800";
  const {
    noacto,
    tipo,
    fresuelto,
    matprofesional,
    barrio_urb,
    uso,
    areapredio,
    aconstruir,
    nopisos,
    univivienda,
    inocupacion,
    estrato,
    estacionamientos,
    frecibo,
    cedcatastrales,
    matr_culainmobiliaria,
    destinolc,
  } = licencia;

  const objLicencia = {
    "Fecha resuelto": fresuelto,
    "Matricula profesional": matprofesional,
    "Area predio": areapredio,
    "A construir": aconstruir,
    "Numero de pisos": nopisos,
    "Unidad vivienda": univivienda,
    "Indice ocupacion": inocupacion,
    Estrato: estrato,
    Estacionamientos: estacionamientos,
    "Fecha recibo": frecibo,
  };

  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <article
      onClick={handleClick}
      className="m-auto mt-8 max-w-5xl h-auto bg-blue-500  text-white font-sans rounded-2xl cursor-pointer hover:bg-blue-600"
    >
      <div className="h-52">
        <div className="flex justify-between px-10 pb-4 pt-2">
          <h2 className="text-xl font-semibold">{tipo}</h2>
          <h2 className="text-lg font-medium">No. acto: {noacto}</h2>
        </div>
        <h3 className="text-center text-lg font-semibold pb-2">
          Solicitud de concepto {uso}
        </h3>
        <p className="m-auto text-center max-w-3xl pb-2 text-sm">
          {destinolc.toLowerCase()}
        </p>
        <div className="flex justify-center pb-2">
          <ItemLicencia fieldName="Dirección" value={barrio_urb} />
          <ItemLicencia
            fieldName="Matricula inmobiliaria"
            value={matr_culainmobiliaria}
          />
        </div>
        <ItemLicencia fieldName="Ficha Catastral" value={cedcatastrales} />
      </div>
      {}
      <div className={open ? classOpen : classOpen + " hidden"}>
        <ul>
          {Object.entries(objLicencia)
            .slice(0, 5)
            .map(([key, value], index) => {
              return (
                <li key={index}>
                  <span className="font-semibold">{key}:</span>
                  {value}
                </li>
              );
            })}
        </ul>
        <ul>
          {Object.entries(objLicencia)
            .slice(5)
            .map(([key, value], index) => {
              return (
                <li key={index}>
                  <span className="font-semibold">{key}:</span>
                  {value}
                </li>
              );
            })}
        </ul>
      </div>
    </article>
  );
};

export default Licence;
