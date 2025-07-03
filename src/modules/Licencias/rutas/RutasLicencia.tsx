import { Routes, Route } from "react-router-dom";
import DetallesVista from "../vistas/DetallesVista";
import VistaPrincipal from "../vistas/VistaPrincipal";
import VistaAsignaciones from "../vistas/VistaAsignaciones";

const RutasLicencia = () => {
  return (
    <Routes>
      <Route path="" element={< VistaPrincipal/>} />
      <Route path="licenciaDetalles" element={<DetallesVista />} />
      <Route path="licenciaAsignacion" element={<VistaAsignaciones />} />
      

    </Routes>
  );
};

export default RutasLicencia;
