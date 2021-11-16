import { useState } from "react";

const Input = ({ placeholder, error }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
<<<<<<< HEAD
        className="p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
=======
        value={value}
        onChange={handleChange}
        className="m-1 p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
>>>>>>> dda6bc5c59f52d5b98e31e4c493ad3a1a1a7cfe0
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Input;
