import React, { useState } from "react";
import FormularioIngresoEquipo from "../../../feature/equipos/form_ingreso/FormularioIngresoEquipo";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ConfirmacionInactivar from "../pila_descartes/ConfirmacionInactivarEquipo";
import "./EstiloTablaEquipos.css";

interface Equipo {
  placa: string;
  marca: string;
  modelo: string;
  fechaIngreso: string;
  ubicacion: string;
  estado?: string;
  colaborador?: string; // si lo necesitas en algún componente futuro
}

interface Props {
  equipos: Equipo[];
}

const TablaEquipos: React.FC<Props> = ({ equipos }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [campoFiltro, setCampoFiltro] = useState("placa");
  const [equipoSeleccionado, setEquipoSeleccionado] = useState<Equipo | null>(null);
  

  const navigate = useNavigate();

  const equiposFiltrados = equipos.filter((equipo) =>
    equipo[campoFiltro as keyof Equipo]?.toLowerCase().includes(filtro.toLowerCase())
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
            <option value="placa">Placa</option>
            <option value="marca">Marca</option>
            <option value="modelo">Modelo</option>
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
            <th>MARCA</th>
            <th>MODELO</th>
            <th>UBICACIÓN</th>
            <th>FECHA DE INGRESO</th>
            <th colSpan={2}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {equiposFiltrados.map((equipo, index) => (
            <tr key={index}>
              <td data-label="PLACA">{equipo.placa}</td>
              <td data-label="MARCA">{equipo.marca}</td>
              <td data-label="MODELO">{equipo.modelo}</td>
              <td data-label="UBICACIÓN">{equipo.ubicacion}</td>
              <td data-label="FECHA DE INGRESO">{equipo.fechaIngreso}</td>
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
          onConfirmar={(motivo) => {
            console.log(`Inactivado con motivo: ${motivo}`);
          }}

        />

      )}

    </div>
  );
};

export default TablaEquipos;
