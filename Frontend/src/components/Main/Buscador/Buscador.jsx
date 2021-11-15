import { useState } from "react";

const Buscador = () => {
  const [catastralPlaceHolder, setCatastralPlaceHolder] =
    useState("Cedula castastral");
  const [barrioPlaceHolder, setbarrioPlaceholder] = useState("Barrio");
  const [usoPlaceHolder, setCsoPlaceHolder] = useState("Tipo de uso");

  const handleChange = (e) => {
    this.setState(e.target.value);
  };

  return (
    <section>
      <article>
        <input
          type="text"
          value={catastralPlaceHolder}
          onChange={handleChange}
        />
      </article>
      <article>
        <input type="text" value={barrioPlaceHolder} onChange={handleChange} />
      </article>
      <article>
        <input type="text" value={usoPlaceHolder} onChange={handleChange} />
      </article>
      <article>Opciones</article>
    </section>
  );
};

export default Buscador;
