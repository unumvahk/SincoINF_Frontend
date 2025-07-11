import React, { useState } from "react";
import "../estilos/EstilosTablalicencias.css";
import ModalLicenciaFlotante from "./ModalLicenciaFlotante";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

interface Licencia {
  nombreLicencia: string;
  proveedorLicencia: string;
  fechaAdquisicionLicencia: string;
  fechaVencimientoLicencia: string;
  cantidadLicencia: number;
}

interface Props {
  licencias: Licencia[];
}

const Tablalicencias: React.FC<Props> = ({ licencias }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const navigate = useNavigate();

  const irAControlAsignacion = () => {
    navigate("/licencias/licenciaAsignacion");
  };

  const licenciasPorVencer = licencias.filter((lic) => {
    const vencimiento = new Date(lic.fechaVencimientoLicencia);
    const hoy = new Date();
    const diasRestantes = (vencimiento.getTime() - hoy.getTime()) / (1000 * 3600 * 24);
    return diasRestantes >= 0 && diasRestantes <= 60;
  });

  return (
    <div className="licencia-contenido">
      <h2 className="licencia-titulo">🧾 Control de Licencias</h2>

      <div className="licencia-tab-nav">
        <button className="active">Inventario Licencias</button>
        <button onClick={irAControlAsignacion}>Control Asignación</button>
      </div>

      {/* ✅ BARRA DE FILTRO + INPUT + BOTÓN AÑADIR */}
      <div className="licencia-barra-superior">
        <select className="licencia-select-filtro">
          <option value="">Filtrar por:</option>
          <option value="nombre">Nombre</option>
          <option value="proveedor">Proveedor</option>
          <option value="fecha">Fecha de vencimiento</option>
        </select>

        <div className="licencia-input-con-icono">
          <input type="text" placeholder="Nombre de licencia / proveedor" />
          <span className="licencia-icono-lupa"><FaSearch /></span>
        </div>

        <button className="licencia-btn-agregar" onClick={() => setMostrarFormulario(true)}>
          Añadir licencia
        </button>
      </div>

      <div className="licencia-cajas-resumen">
        <div className="licencia-caja">
          <h4>Total de licencias</h4>
          <p>{licencias.length}</p>
        </div>
        <div className="licencia-caja">
          <h4>Licencias por vencer</h4>
          <p>{licenciasPorVencer.length}</p>
        </div>
      </div>

      {mostrarFormulario && (
        <ModalLicenciaFlotante onClose={() => setMostrarFormulario(false)} />
      )}

      <table className="tabla-licencia">
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>PROVEEDOR</th>
            <th>FECHA ADQUISICIÓN</th>
            <th>FECHA VENCIMIENTO</th>
            <th>CANTIDAD</th>
            <th>DETALLES</th>
          </tr>
        </thead>
        <tbody>
          {licencias.map((licencia) => (
            <tr key={licencia.nombreLicencia}>
              <td>{licencia.nombreLicencia}</td>
              <td>{licencia.proveedorLicencia}</td>
              <td>{licencia.fechaAdquisicionLicencia}</td>
              <td>{licencia.fechaVencimientoLicencia}</td>
              <td>{licencia.cantidadLicencia}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="licencia-btn-detalles"
                  onClick={() => navigate("/licencias/licenciaDetalles", { state: { licencia } })}
                >
                  Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablalicencias;
