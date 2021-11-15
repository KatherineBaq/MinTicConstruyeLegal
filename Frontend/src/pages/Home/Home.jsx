import Layout from "../Layout";

import Licencia from "../../components/Main/Licence/Licence";
import Boton from "../../components/Main/Search/Boton/Boton";
import Input from "../../components/Main/Search/Input/Input";
import licencia from "../../Data.json";
import Seeker from "../../components/Main/Search/Seeker";

const Home = () => {
  return (
    <>
      <Layout>
        <Seeker />
        <section>
          <Licencia licencia={licencia[1]} />
          <Licencia licencia={licencia[0]} />
          <Licencia licencia={licencia[1]} />
        </section>
      </Layout>
    </>
  );
};

export default Home;
