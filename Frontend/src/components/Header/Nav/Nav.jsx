import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="bg-blue-500 text-white w-screen h-20 flex justify-between items-center px-44 shadow-xl font-sans">
      <Link to="/" className="font-semibold text-3xl">
        MinTICconstruyelegal
      </Link>
      <Link to="/login" className="underline text-lg">
        Ingresar como administrador
      </Link>
    </nav>
  );
};

export default Nav;
