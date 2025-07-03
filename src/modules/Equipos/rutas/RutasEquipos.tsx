import { Routes, Route } from "react-router-dom";
import VistaInformacionEquipo from "../vistas/VistaInformacionEquipo";
import EquiposVista from "../vistas/EquiposVistas";

const RutasEquipos = () => {
  return (
    <Routes>
      {/* Ruta por defecto al entrar a /equipos */}
      <Route path="" element={<EquiposVista />} />
      
      {/* Otras rutas */}
      <Route path="informacion" element={<VistaInformacionEquipo />} />
    
    </Routes>
  );
};

export default RutasEquipos;
