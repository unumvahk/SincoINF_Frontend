import React, { useEffect, useState } from "react";
import TablaEquipos from "../componentes/TablaEquipos";
import Layout from "../../../layout/Layout";

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
      {
        placa: "EQ-001",
        colaborador: "Juan Pérez",
        fechaMantenimiento: "2025-06-10",
        ubicacion: "Bogotá",
      },
      {
        placa: "EQ-002",
        colaborador: "Ana Gómez",
        fechaMantenimiento: "2025-06-15",
        ubicacion: "Medellín",
      },
      {
        placa: "EQ-003",
        colaborador: "Carlos López",
        fechaMantenimiento: "2025-06-20",
        ubicacion: "Cali",
      },
      {
        placa: "EQ-004",
        colaborador: "Mariana Torres",
        fechaMantenimiento: "2025-06-18",
        ubicacion: "Barranquilla",
      },
      {
        placa: "EQ-005",
        colaborador: "Luis Rodríguez",
        fechaMantenimiento: "2025-06-12",
        ubicacion: "Cartagena",
      },
      {
        placa: "EQ-006",
        colaborador: "Sofía Ramírez",
        fechaMantenimiento: "2025-06-22",
        ubicacion: "Manizales",
      },
    ];
    setEquipos(data);
  }, []);

  return (
    <Layout>
      <TablaEquipos equipos={equipos} />
      
    </Layout>
  );
  
};

export default EquiposVista;
