import { Routes, Route } from "react-router-dom";
import VistaInformacionEquipo from "../vistas/VistaInformacionEquipo";
import EquiposVista from "../vistas/EquiposVistas";

const RutasEquipos = () => {
  return (
    <Routes>
      <Route path="informacion" element={<VistaInformacionEquipo />} />
      <Route path="info" element={<EquiposVista />} />
    </Routes>
  );
};

export default RutasEquipos;