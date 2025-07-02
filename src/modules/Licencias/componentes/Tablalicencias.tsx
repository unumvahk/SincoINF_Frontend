import React, { useState } from "react";
import "../estilos/EstilosTablalicencias.css";
import ModalLicenciaFlotante from "./ModalLicenciaFlotante";
import { useNavigate } from "react-router-dom"; // ✅ Agregado

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
  const navigate = useNavigate(); // ✅ Agregado

  // ✅ Función de navegación
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
      {/* Pestañas */}
      <div className="licencia-tab-nav">
        <button className="active">Inventario Licencias</button>
        <button onClick={irAControlAsignacion}>Control Asignación</button> {/* ✅ Agregado */}
      </div>

      {/* Barra superior */}
      <div className="licencia-barra-superior">
        <div className="licencia-input-con-icono">
          <input type="text" placeholder="Nombre de licencia / proveedor" />
          <span className="licencia-icono-lupa">🔍</span>
        </div>
        <button
          className="licencia-btn-agregar"
          onClick={() => setMostrarFormulario(true)}
        >
          Añadir licencia
        </button>
      </div>

      {/* Cajas resumen */}
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

      {/* Modal flotante */}
      {mostrarFormulario && (
        <ModalLicenciaFlotante onClose={() => setMostrarFormulario(false)} />
      )}

      {/* Tabla */}
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
          {licencias.map((licencia, i) => (
            <tr key={i}>
              <td data-label="NOMBRE">{licencia.nombreLicencia}</td>
              <td data-label="PROVEEDOR">{licencia.proveedorLicencia}</td>
              <td data-label="FECHA ADQUISICIÓN">{licencia.fechaAdquisicionLicencia}</td>
              <td data-label="FECHA VENCIMIENTO">{licencia.fechaVencimientoLicencia}</td>
              <td data-label="CANTIDAD">{licencia.cantidadLicencia}</td>
              <td data-label="DETALLES" style={{ textAlign: "center" }}>
                <button className="licencia-btn-detalles">Detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablalicencias;
