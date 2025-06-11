import React from "react";
import "../estilos/EstiloTablaEquipos.css"; // Importamos los estilos CSS

// Tipado para un equipo
interface Equipo {
  placa: string;
  colaborador: string;
  fechaMantenimiento: string;
  ubicacion: string;
}

// Tipado de las props que recibe el componente
interface Props {
  equipos: Equipo[];
}

// Componente funcional principal
const TablaEquipos: React.FC<Props> = ({ equipos }) => {
  return (
    <div className="contenido">
      {/* === PESTAÑAS === */}
      <div className="tab-nav">
        <button className="active">Inventario Licencias</button>
        <button>Control Asignacion</button>
      </div>

      {/* === BARRA DE BÚSQUEDA Y BOTÓN DE AÑADIR === */}
      <div className="barra-superior">
        <input
          type="text"
          placeholder="Nombre de Colaborador / Cédula"
        />
        <button className="buscar-btn">🔍</button>
        <button className="agregar-btn">Añadir Licencia</button>
      </div>

      {/* === TABLA DE EQUIPOS === */}
      <table className="tabla-equipos">
        <thead>
          <tr>
            <th>PLACA</th>
            <th>COLABORADOR</th>
            <th>FECHA MANTENIMIENTO</th>
            <th>UBICACION</th>
            <th colSpan={2}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, i) => (
            <tr key={i}>
              <td data-label="PLACA">{equipo.placa}</td>
              <td data-label="COLABORADOR">{equipo.colaborador}</td>
              <td data-label="FECHA MANTENIMIENTO">{equipo.fechaMantenimiento}</td>
              <td data-label="UBICACION">{equipo.ubicacion}</td>
              <td data-label="ACCIONES">
                <button className="info">Información</button>
              </td>
              <td data-label="ACCIONES">
                <button className="eliminar">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEquipos;
