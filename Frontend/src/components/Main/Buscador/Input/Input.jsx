import { useState } from "react";

const Input = ({placeholder}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
        setError("Por favor ingresa un valor");
        } else {
        setError("");
        }
    };
    
    return (<>
        <input type="text" placeholder={placeholder} value={value} onChange={handleChange} className="bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base"/>
        {error && <p className="error">{error}</p>}
    </>);
};

export default Input;
