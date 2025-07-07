import React, { useEffect, useState } from "react";
import TablaEquipos from "../componentes/TablaEquipos";
import Layout from "../../../layout/Layout";
import "../estilos/EquiposVista.css";

interface Equipo {
  placa: string;
  marca: string;
  modelo: string;
  fechaIngreso: string;
  ubicacion: string;
}

const EquiposVista: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([]);

  useEffect(() => {
    const data: Equipo[] = [
      { placa: "EQ-001", marca: "Dell", modelo: "OptiPlex 3080", fechaIngreso: "2025-06-10", ubicacion: "Oficina 1" },
      { placa: "EQ-002", marca: "HP", modelo: "EliteBook 840", fechaIngreso: "2025-06-12", ubicacion: "Oficina 2" },
      { placa: "EQ-003", marca: "Lenovo", modelo: "ThinkPad T14", fechaIngreso: "2025-06-14", ubicacion: "Oficina 1" },
      { placa: "EQ-004", marca: "Asus", modelo: "Vivobook 15", fechaIngreso: "2025-06-16", ubicacion: "Oficina 2" },
      { placa: "EQ-005", marca: "Acer", modelo: "Aspire 5", fechaIngreso: "2025-06-18", ubicacion: "Bodega" },
      { placa: "EQ-006", marca: "Apple", modelo: "MacBook Pro", fechaIngreso: "2025-06-20", ubicacion: "Oficina 1" },
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
