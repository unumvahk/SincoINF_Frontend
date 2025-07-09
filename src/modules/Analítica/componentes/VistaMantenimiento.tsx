import React, { useState } from "react";
import GraficoMantenimiento from "../componentes/GraficoMantenimiento";
import "../estilos/VistaMantenimiento.css";
import { FaUser } from "react-icons/fa"; // ✅ Ícono tipo "personita"

const VistaMantenimiento: React.FC = () => {
  // ✅ Fechas de filtro
  const [fechaInicio, setFechaInicio] = useState("2025-06-01");
  const [fechaFin, setFechaFin] = useState("2025-06-30");

  // ✅ Búsqueda de nombre
  const [busqueda, setBusqueda] = useState("");

  // ✅ Lista base de empleados
  const empleados = [
    "Daniel López",
    "Diana Marcela Galindo",
    "Sebastián Avila",
  ];

  // ✅ Empleados seleccionados por checkbox
  const [seleccionados, setSeleccionados] = useState<string[]>(empleados);

  // ✅ Manejador de selección
  const handleSeleccion = (nombre: string) => {
    if (seleccionados.includes(nombre)) {
      setSeleccionados(seleccionados.filter((n) => n !== nombre));
    } else {
      setSeleccionados([...seleccionados, nombre]);
    }
  };

  // ✅ Filtro de búsqueda aplicado sobre empleados seleccionados
  const empleadosFiltrados = seleccionados.filter((nombre) =>
    nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-vista-mantenimiento">
      <h2 className="titulo-mantenimiento">Desempeño de Mantenimientos</h2>

      {/* === Filtros superiores alineados a la derecha === */}
      <div className="filtros-superiores">
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
        />

        {/* === Campo de búsqueda con ícono de persona === */}
        <div className="contenedor-buscador">
          <FaUser className="icono-persona" />
          <input
            type="text"
            placeholder="Buscar trabajador..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {/* === Lista de empleados para comparar (checkbox múltiple) === */}
      <div className="checkbox-empleados">
        {empleados.map((nombre) => (
          <label key={nombre}>
            <input
              type="checkbox"
              checked={seleccionados.includes(nombre)}
              onChange={() => handleSeleccion(nombre)}
            />
            {nombre}
          </label>
        ))}
      </div>

      {/* === Gráfico que muestra los empleados filtrados === */}
      <GraficoMantenimiento
        empleados={empleadosFiltrados}
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
      />
    </div>
  );
};

export default VistaMantenimiento;
