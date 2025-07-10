import React from 'react';
import Tablalicencias from '../componentes/Tablalicencias';

// Datos simulados de licencias
const licenciasPrueba = [
  {
    nombreLicencia: "Microsoft Office",
    proveedorLicencia: "Microsoft",
    fechaAdquisicionLicencia: "2023-01-01",
    fechaVencimientoLicencia: "2026-01-01",
    cantidadLicencia: 50,
  },
  {
    nombreLicencia: "Adobe Photoshop",
    proveedorLicencia: "Adobe",
    fechaAdquisicionLicencia: "2022-05-10",
    fechaVencimientoLicencia: "2025-05-10",
    cantidadLicencia: 25,
  },
];

const VistaPrincipal: React.FC = () => {
  return (
    <div className="pagina">
      <>
        <Tablalicencias licencias={licenciasPrueba} />
      </>
    </div>
  );
};

export default VistaPrincipal;
