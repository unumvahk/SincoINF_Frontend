import { Routes, Route } from "react-router-dom";
import VistaInformacionEquipo from "../vistas/VistaInformacionEquipo";

const RutasEquipos = () => {
  return (
    <Routes>
      <Route path="informacion" element={<VistaInformacionEquipo />} />
    </Routes>
  );
};

export default RutasEquipos;