import { useState } from "react";

const Buscador = () => {
  const [catastralPlaceHolder, setCatastralPlaceHolder] =
    useState("Cedula castastral");
  const [barrioPlaceHolder, setBarrioPlaceHolder] = useState("Barrio");
  const [usoPlaceHolder, setUsoPlaceHolder] = useState("Tipo de uso");

  const handleClick = () => {
    setCatastralPlaceHolder("");
  };

  return (
    <section>
      <article>
        <input
          type="text"
          onChange={(e) => setCatastralPlaceHolder(e.target.value)}
          placeholder="catastral"
        />
      </article>
      <article>
        <input
          type="text"
          onChange={(e) => setBarrioPlaceHolder(e.target.value)}
          placeholder="Barrio"
        />
      </article>
      <article>
        <input
          type="text"
          onChange={(e) => setUsoPlaceHolder(e.target.value)}
          placeholder="Uso"
        />
      </article>
      <article>Opciones</article>
    </section>
  );
};

export default Buscador;
