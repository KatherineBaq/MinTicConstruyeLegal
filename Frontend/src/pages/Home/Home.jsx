import Nav from "../../components/Header/Nav/Nav";
import Boton from "../../components/Main/Buscador/Boton/Boton";
import Input from "../../components/Main/Buscador/Input/Input";

const Home = () => {
  return (
    <>
      <Nav />
      <Input placeholder="hola" />
      <Boton text="buscar"/>
    </>
  );
};

export default Home;
