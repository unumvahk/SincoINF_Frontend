import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import ModalConfirmarRevocacion from "../revolic/ModalRevocarConfirmacion"; 
import "./ControlDeAsignaciones.css";
const ControlDeAsignaciones = () => {
  const licencias = [
    {
      placa: "PC-001",
      nombreColaborador: "Juan Pérez",
      nombreLicencia: "Office 365",
      fechaAsignacion: "2024-06-10",
    },
    {
      placa: "PC-002",
      nombreColaborador: "Ana Gómez",
      nombreLicencia: "Adobe Photoshop",
      fechaAsignacion: "2024-05-22",
    },
    {
      placa: "PC-003",
      nombreColaborador: "Carlos Díaz",
      nombreLicencia: "Visual Studio",
      fechaAsignacion: "2024-04-12",
    },
  ];

  // Estado para controlar el modal
  const [mostrarModal, setMostrarModal] = useState(false);

  // Estado para guardar la licencia seleccionada
  const [licenciaSeleccionada, setLicenciaSeleccionada] = useState({
    placa: "",
    nombreColaborador: "",
    nombreLicencia: "",
    fechaAsignacion: "",
  });

  return (
    <div className="lic-container">
      {/* Sidebar */}
      <aside className="lic-sidebar">
        <div className="lic-icono"><i className="fa fa-user" /></div>
        <div className="lic-icono"><i className="fa fa-desktop" /></div>
        <div className="lic-icono"><i className="fa fa-table" /></div>
      </aside>

      {/* Contenido principal */}
      <main className="lic-contenido">
        {/* Filtros y búsqueda */}
        <div className="lic-filtros-barra">
          <select className="lic-select">
            <option>Filtrar Por:</option>
            <option>Placa</option>
            <option>Nombre</option>
          </select>

          <div className="lic-input-con-icono">
            <input
              type="text"
              placeholder="Nombre de Colaborador / Cédula"
              className="lic-input-busqueda"
            />
            <span className="lic-icono-lupa">
              <FaSearch /> {/* ✅ CAMBIO: nuevo ícono */}
            </span>
          </div>

          <button className="lic-btn-buscar">Buscar</button>
        </div>

        {/* Tabla de asignaciones */}
        <table className="lic-tabla">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Nombre del Colaborador</th>
              <th>Licencia</th>
              <th>Fecha de Asignación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {licencias.map((lic, i) => (
              <tr key={i}>
                <td>{lic.placa}</td>
                <td>{lic.nombreColaborador}</td>
                <td>{lic.nombreLicencia}</td>
                <td>{lic.fechaAsignacion}</td>
                <td>
                  <button
                    className="lic-btn-Revocar"
                    onClick={() => {
                      setLicenciaSeleccionada(lic);
                      setMostrarModal(true);
                    }}
                  >
                    Revocar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Modal de confirmación */}
      {mostrarModal && (
        <ModalConfirmarRevocacion
          placa={licenciaSeleccionada.placa}
          colaborador={licenciaSeleccionada.nombreColaborador}
          licencia={licenciaSeleccionada.nombreLicencia}
          fechaAsignacion={licenciaSeleccionada.fechaAsignacion}
          onClose={() => setMostrarModal(false)}
          onConfirm={() => {
            console.log("Revocando:", licenciaSeleccionada);
            // Aquí puedes hacer un fetch al backend
            setMostrarModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ControlDeAsignaciones;
