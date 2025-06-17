import React from "react";
import "../estilos/EstiloTablaEquipos.css";

<<<<<<< HEAD
// Definimos la estructura de un equipo
=======
// Tipado para un equipo
>>>>>>> eac5934f4aa98c94f546a49aa178d4f37375d89a
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

<<<<<<< HEAD
// Componente principal de la tabla de equipos
const TablaEquipos: React.FC<Props> = ({ equipos }) => {
  return (
    <div className="contenido">
      {/* Pestañas de navegación */}
=======
// Componente funcional principal
const TablaEquipos: React.FC<Props> = ({ equipos }) => {
  return (
    <div className="contenido">
      {/* === PESTAÑAS === */}
>>>>>>> eac5934f4aa98c94f546a49aa178d4f37375d89a
      <div className="tab-nav">
        <button className="active">Inventario Licencias</button>
        <button>Control Asignación</button>
      </div>

<<<<<<< HEAD
      {/* Barra superior con campo de búsqueda + botón añadir */}
      <div className="barra-superior">
        {/* Input con lupa integrada */}
        <div className="input-con-icono">
          <input type="text" placeholder="Nombre de Colaborador / Cédula" />
          <span className="icono-lupa">🔍</span>
        </div>

        {/* Botón verde para añadir licencia */}
        <button className="agregar-btn">Añadir Licencia</button>
      </div>

      {/* Tabla de equipos */}
=======
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
>>>>>>> eac5934f4aa98c94f546a49aa178d4f37375d89a
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
