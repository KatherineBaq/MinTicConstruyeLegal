import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" w-screen p-4 mt-8 flex justify-around bg-gray-500 text-white text-lg">
      <Link to="/">Politicas de cookies</Link>
      <Link to="/">Terminos y condiciones</Link>
      <Link to="/">Politica de privacidad</Link>
    </footer>
  );
};

export default Footer;
