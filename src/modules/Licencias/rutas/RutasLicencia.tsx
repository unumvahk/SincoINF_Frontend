import { Routes, Route } from "react-router-dom";
import LicenciaVista from "../vistas/LicenciaVista";
import VistaPrincipal from "../vistas/VistaPrincipal";
import VistaAsignaciones from "../vistas/VistaAsignaciones";

const RutasLicencia = () => {
  return (
    <Routes>
      <Route path="licenciaInfo" element={<LicenciaVista />} />
      <Route path="licenciaPrincipal" element={<VistaPrincipal />} />
      <Route path="licenciaAsignacion" element={<VistaAsignaciones />} />
      {/* Ruta principal por defecto al ir a /licencias */}
      <Route path="" element={<LicenciaVista />} />

    </Routes>
  );
};

export default RutasLicencia;
