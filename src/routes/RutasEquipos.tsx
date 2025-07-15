import { Routes, Route } from "react-router-dom";
import EquiposVista from "../views/equipos/EquiposVistas";
import VistaInformacionEquipo from "../views/equipos/VistaInformacionEquipo";
import VistaColores from '../views/equipos/vistaColor';

const RutasEquipos = () => {
  return (
    <Routes>
      {/* Ruta por defecto al entrar a /equipos */}
      <Route path="" element={<EquiposVista />} />
      <Route path="/colores" element={<VistaColores />} />
      {/* Otras rutas */}
      <Route path="informacion" element={<VistaInformacionEquipo />} />
    
    </Routes>
  );
};

export default RutasEquipos;
