import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

interface Props {
  empleados: string[];
  fechaInicio: string;
  fechaFin: string;
}

const datosSimulados = [
  { nombre: "Daniel López", porcentaje: 9 },
  { nombre: "Diana Marcela Galindo", porcentaje: 15 },
  { nombre: "Sebastián Avila", porcentaje: 28 }
];

// Define colores según porcentaje
const getColor = (valor: number) => {
  if (valor < 10) return "#ff4d4f"; // Rojo
  if (valor < 20) return "#faad14"; // Naranja
  return "#52c41a"; // Verde
};

const GraficoMantenimiento: React.FC<Props> = ({ empleados }) => {
  const dataFiltrada = datosSimulados.filter((d) =>
    empleados.includes(d.nombre)
  );

  return (
    <div className="grafico-mantenimiento">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataFiltrada} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="porcentaje" name="% de Mantenimientos">
            {dataFiltrada.map((entry, index) => (
              <Cell key={index} fill={getColor(entry.porcentaje)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoMantenimiento;
