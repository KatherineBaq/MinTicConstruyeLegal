import React from "react";

const Boton = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 w-48 h-14 rounded-2xl text-white capitalize filter drop-shadow-md text-2xl"
    >
      {text}
    </button>
  );
};

export default Boton;
