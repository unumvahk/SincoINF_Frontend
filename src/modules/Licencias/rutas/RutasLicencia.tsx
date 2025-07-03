import { Routes, Route } from "react-router-dom";
import LicenciaVista from "../vistas/LicenciaVista";

const RutasLicencia = () => {
  return (
    <Routes>
      {/* Ruta principal por defecto al ir a /licencias */}
      <Route path="" element={<LicenciaVista />} />

      {/* Ruta específica si quieres acceder a ella directamente */}
      <Route path="licenciaInfo" element={<LicenciaVista />} />
    </Routes>
  );
};

export default RutasLicencia;
