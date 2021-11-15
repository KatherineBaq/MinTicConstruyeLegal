import React, { useState, useEffect } from "react";
import Input from "../Search/Input/Input";

const seeker = () => {
  const [data, setData] = useState([]);
  const [catastral, setCatastral] = useState("");
  const [barrio, setBarrio] = useState("");
  const [uso, setUso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    useEffect(() => {
      fetch("http://localhost:3001/licenses/")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    alert("Hola");
  };

  console.log(data);

  return (
    <form
      className="flex justify-around mt-8 max-w-5xl m-auto"
      onSubmit={handleSubmit}
    >
      <button className="bg-searchIcon w-8 bg-no-repeat" type="submit" />
      <Input
        placeholder="Cedula catastral"
        value={catastral}
        onChange={(e) => setCatastral(e.target.value)}
      />
      <Input
        placeholder="Barrio"
        value={barrio}
        onChange={(e) => setBarrio(e.target.value)}
      />
      <Input
        placeholder="Tipo de uso"
        value={uso}
        onChange={(e) => setUso(e.target.value)}
      />
      <button type="button" className="bg-optionsSearch w-8 bg-no-repeat" />
    </form>
  );
};

export default seeker;
