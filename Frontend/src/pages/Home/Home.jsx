import Nav from "../../components/Header/Nav/Nav";
import Buscador from "../../components/Main/Buscador/Buscador";
import Licencia from "../../components/Main/Licencia/Licencia";
const Home = () => {
  return (
    <>
      <Nav />
      <Buscador />
      <Licencia licencia={licencia[1]} />
      <Licencia licencia={licencia[1]} />
      <Licencia licencia={licencia[1]} />
    </>
  );
};

export default Home;
