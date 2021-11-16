import React, { useContext } from "react";
import { Link } from "react-router-dom";
import contextUser from "../../../context/context";
const Nav = () => {
  const { user, setUser } = useContext(contextUser);

  return (
    <nav className="bg-blue-500 text-white w-screen h-20 flex justify-between items-center px-44 shadow-xl font-sans">
      <Link to="/" className="font-semibold text-3xl">
        MinTICconstruyelegal
      </Link>

      {Object.keys(user) !== 0 ? (
        <Link to="/login" className="underline text-lg">
          Salir de la sesion {user.username}
        </Link>
      ) : (
        <Link to="/login" className="underline text-lg">
          Ingresa como administrador
        </Link>
      )}
    </nav>
  );
};

export default Nav;
