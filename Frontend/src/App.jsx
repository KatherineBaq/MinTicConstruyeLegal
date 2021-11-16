import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/context";

import Login from "./pages/Login/Login";

const App = () => {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </UserContext>
  );
};

export default App;
