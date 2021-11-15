import { useState } from "react";

const Input = ({ placeholder, error }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Input;
