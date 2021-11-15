import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={"logn"} />
    </Routes>
  );
};

export default App;
