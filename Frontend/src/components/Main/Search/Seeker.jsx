import React, { useState } from "react";
import Input from "../Search/Input/Input";

const seeker = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError("Por favor ingresa un valor");
    } else {
      setError("");
    }
  };

  return (
    <form
      className="flex justify-around mt-8 max-w-5xl m-auto"
      onSubmit={handleSubmit}
    >
      <button className="bg-searchIcon w-8 bg-no-repeat" type="submit" />
      <Input placeholder="Cedula catastral" error={error} />
      <Input placeholder="Barrio" error={error} />
      <Input placeholder="Tipo de uso" error={error} />
      <button className="bg-optionsSearch w-8 bg-no-repeat" type="submit" />
    </form>
  );
};

export default seeker;
