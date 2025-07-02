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
    </Routes>
  );
};

export default RutasLicencia;
