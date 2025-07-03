import React, { useEffect, useState } from "react";
import TablaEquipos from "../componentes/TablaEquipos";
import Layout from "../../../layout/Layout";
import "../estilos/EquiposVista.css";

interface Equipo {
  placa: string;
  colaborador: string;
  fechaMantenimiento: string;
  ubicacion: string;
}

const EquiposVista: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([]);

  useEffect(() => {
    const data: Equipo[] = [
      { placa: "EQ-001", colaborador: "Juan Pérez", fechaMantenimiento: "2025-06-10", ubicacion: "Oficina 1" },
      { placa: "EQ-002", colaborador: "Ana Gómez", fechaMantenimiento: "2025-06-15", ubicacion: "Oficina 2" },
      { placa: "EQ-003", colaborador: "Carlos López", fechaMantenimiento: "2025-06-20", ubicacion: "Oficina 1" },
      { placa: "EQ-004", colaborador: "Mariana Torres", fechaMantenimiento: "2025-06-18", ubicacion: "Oficina 2" },
      { placa: "EQ-005", colaborador: "Luis Rodríguez", fechaMantenimiento: "2025-06-12", ubicacion: "Oficina 1" },
      { placa: "EQ-006", colaborador: "Sofía Ramírez", fechaMantenimiento: "2025-06-22", ubicacion: "Oficina 2" },
    ];
    setEquipos(data);
  }, []);

  return (
    <Layout>
      <div className="equipos-vista-contenedor">
        <h2 className="titulo-equipos">🖥️ Equipos Registrados</h2>
        <TablaEquipos equipos={equipos} />
      </div>
    </Layout>
  );
};

export default EquiposVista;
