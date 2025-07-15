import { Routes, Route } from "react-router-dom";
import VistaMantenimiento from "../../src/views/estadisticas/VistaMantenimiento";

const RutasAnalitica = () => {
  return (
    <Routes>
      <Route path="mantenimiento" element={<VistaMantenimiento />} />
    </Routes>
  );
};

export default RutasAnalitica;
