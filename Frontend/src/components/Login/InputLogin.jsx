import React, { useState } from "react";

const InputLogin = ({ textField, img, placeholder, register, label, type }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="border-white border-b-2 w-2/3 h-16 mt-6">
      <div className=" flex">
        <img className="w-9 h-9" src={img} />
        <h3 className="p-1">{textField}</h3>
      </div>
      <input
        {...register(label)}
        className="w-full h-auto bg-transparent pl-4"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputLogin;
