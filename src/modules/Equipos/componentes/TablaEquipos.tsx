import React, { useState } from "react";
import "../estilos/EstiloTablaEquipos.css";
import ConfirmacionInactivar from "./ConfirmacionInactivarEquipo";
import FormularioIngresoEquipo from "./FormularioIngresoEquipo";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

interface Equipo {
  placa: string;
  colaborador: string;
  fechaMantenimiento: string;
  ubicacion: string;
}

interface Props {
  equipos: Equipo[];
}

const TablaEquipos: React.FC<Props> = ({ equipos }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [campoFiltro, setCampoFiltro] = useState("colaborador");
  const [equipoSeleccionado, setEquipoSeleccionado] = useState<Equipo | null>(null);
  const [mensajeExito, setMensajeExito] = useState("");


  const navigate = useNavigate();

  const equiposFiltrados = equipos.filter((equipo) =>
    equipo[campoFiltro as keyof Equipo].toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="equipos-contenedor">
      {/* === Barra superior con filtros === */}
      <div className="equipos-barra-superior">
        <div className="equipos-filtro-contenedor">
          <select
            className="filtrar-equipos"
            value={campoFiltro}
            onChange={(e) => setCampoFiltro(e.target.value)}
          >
            <option value="colaborador">Nombre del Colaborador</option>
            <option value="placa">Placa</option>
            <option value="ubicacion">Ubicación</option>
          </select>
          <div className="equipos-busqueda">
            <input
              type="text"
              placeholder="Buscar..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
            <span className="equipos-icono-busqueda">
              <FaSearch />
            </span>

          </div>
        </div>

        <button
          className="equipos-btn-agregar"
          onClick={() => setMostrarFormulario(true)}
        >
          Añadir Equipo
        </button>
      </div>

      {/* === Tabla === */}
      <table className="equipos-tabla">
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
          {equiposFiltrados.map((equipo, index) => (
            <tr key={index}>
              <td data-label="PLACA">{equipo.placa}</td>
              <td data-label="COLABORADOR">{equipo.colaborador}</td>
              <td data-label="FECHA MANTENIMIENTO">{equipo.fechaMantenimiento}</td>
              <td data-label="UBICACIÓN">{equipo.ubicacion}</td>
              <td className="equipos-acciones">
                <button
                  className="equipos-btn-detalles"
                  onClick={() => navigate("/equipos/informacion")}
                >
                  Detalles
                </button>
              </td>
              <td className="equipos-acciones">
                <button
                  className="equipos-btn-inactivar"
                  onClick={() => setEquipoSeleccionado(equipo)}
                >
                  Inactivar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* === Modal Ingreso Equipo === */}
      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <FormularioIngresoEquipo onClose={() => setMostrarFormulario(false)} />
          </div>
        </div>
      )}

      {/* === Modal Confirmación Inactivación === */}
      {equipoSeleccionado && (
        <ConfirmacionInactivar
          equipo={equipoSeleccionado}
          onCancelar={() => setEquipoSeleccionado(null)}
          onConfirmar={() => {
            setMensajeExito(`Equipo con placa ${equipoSeleccionado?.placa} inactivado exitosamente.`);
            setEquipoSeleccionado(null);

            // Ocultar la notificación después de 3 segundos
            setTimeout(() => setMensajeExito(""), 3000);
          }}

        />
      )}
      {mensajeExito && (
        <div className="toast-exito">
          {mensajeExito}
        </div>
      )}
    </div>
  );
};

export default TablaEquipos;
