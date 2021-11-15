import React from "react";
import ItemLicencia from "./ItemLicencia";

const Licencia = ({ licencia }) => {
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
    estacionamientos,
    cedcatastrales,
    matr_culainmobiliaria,
    frecibo,
    estrato,
    destinolc,
  } = licencia;

  return (
    <article className="m-auto mt-8 max-w-5xl h-52 bg-blue-500  text-white font-sans rounded-2xl cursor-pointer hover:bg-blue-600">
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
        <ItemLicencia
          className="pb-2"
          fieldName="Dirección"
          value={barrio_urb}
        />
        <ItemLicencia
          fieldName="Matricula inmobiliaria"
          value={matr_culainmobiliaria}
        />
      </div>
      <ItemLicencia fieldName="Ficha Catastral" value={cedcatastrales} />
    </article>
  );
};

export default Licencia;
