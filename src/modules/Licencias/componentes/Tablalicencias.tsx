import React from "react";
import "../estilos/EstiloTablaEquipos.css";

// Estructura de un equipo
interface Equipo {
  placa: string;
  colaborador: string;
  fechaMantenimiento: string;
  ubicacion: string;
}

// Props que recibe el componente
interface Props {
  equipos: Equipo[];
}

const TablaEquipos: React.FC<Props> = ({ equipos }) => {
  return (
    <div className="contenido">
      {/* Navegación de pestañas */}
      <div className="tab-nav">
        <button className="active">Inventario Licencias</button>
        <button>Control Asignación</button>
      </div>

      {/* Barra superior: búsqueda y botón */}
      <div className="barra-superior">
        {/* Campo de búsqueda con ícono */}
        <div className="input-con-icono">
          <input type="text" placeholder="Nombre de Colaborador / Cédula" />
          <span className="icono-lupa">🔍</span>
        </div>

        {/* Botón agregar licencia */}
        <button className="agregar-btn">Añadir Licencia</button>
      </div>

      {/* Tabla de datos */}
      <table className="tabla-equipos">
        <thead>
          <tr>
            <th>PLACA</th>
            <th>COLABORADOR</th>
            <th>FECHA MANTENIMIENTO</th>
            <th>UBICACIÓN</th>
            <th colSpan={2}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, i) => (
            <tr key={i}>
              <td data-label="PLACA">{equipo.placa}</td>
              <td data-label="COLABORADOR">{equipo.colaborador}</td>
              <td data-label="FECHA MANTENIMIENTO">{equipo.fechaMantenimiento}</td>
              <td data-label="UBICACIÓN">{equipo.ubicacion}</td>
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
