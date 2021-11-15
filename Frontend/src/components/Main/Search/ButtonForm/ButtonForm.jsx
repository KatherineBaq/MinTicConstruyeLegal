import React from "react";

const ButtonForm = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 mt-10 py-2 px-6 rounded-xl text-white text-center capitalize filter drop-shadow-md text-xl"
    >
      {text}
    </button>
  );
};

export default ButtonForm;
