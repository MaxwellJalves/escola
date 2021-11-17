import { Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Informativo from "./pages/Informativo";
import Sobre from "./pages/Sobre";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/informativos" element={<Informativo />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default Rotas;
