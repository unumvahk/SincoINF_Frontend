import { Routes, Route } from "react-router-dom";
import VistaPrincipal from "../views/licencias/VistaPrincipal";
import DetallesVista from "../views/licencias/DetallesVista";
import VistaAsignaciones from "../views/licencias/VistaAsignaciones";

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
