import { Routes, Route } from "react-router-dom";
import LicenciaVista from "../vistas/LicenciaVista";


const RutasLicencia = () => {
  return (
    <Routes>
      <Route path="licenciaInfo" element={< LicenciaVista/>} />
    </Routes>
  );
};

export default RutasLicencia;