import { Routes, Route } from "react-router-dom";
import VistaPrincipal from "../modules/Licencias/vistas/VistaPrincipal";
import DetallesVista from "../modules/Licencias/vistas/DetallesVista";
import VistaAsignaciones from "../modules/Licencias/vistas/VistaAsignaciones";

const RutasLicencia = () => {
  return (
    <Routes>
      <Route path="" element={< VistaPrincipal />} />
      <Route path="licenciaDetalles" element={<DetallesVista />} />
      <Route path="licenciaAsignacion" element={<VistaAsignaciones />} />
    </Routes>
  );
};

export default RutasLicencia;
