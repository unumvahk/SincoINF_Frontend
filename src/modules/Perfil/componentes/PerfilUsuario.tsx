import React, { useState } from 'react';
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaIdCard,
  FaBuilding,
  FaCamera,
  FaWrench,
  FaCalendarAlt,
  FaTimes,
} from 'react-icons/fa';
import '../estilos/PerfilUsuario.css';

const PerfilUsuario: React.FC = () => {
  const [imagen, setImagen] = useState<string | null>(null);
  const [historial] = useState([
    { fecha: '2025-06-01', accion: 'Mantenimiento de laptop HP' },
    { fecha: '2025-06-15', accion: 'Instalación de licencia Office' },
    { fecha: '2025-06-20', accion: 'Actualización de antivirus' },
    { fecha: '2025-07-01', accion: 'Revisión de sistema operativo' },
  ]);
  const [filtroTexto, setFiltroTexto] = useState('');
  const [filtroFecha, setFiltroFecha] = useState('');
  const [detalleSeleccionado, setDetalleSeleccionado] = useState<null | { fecha: string; accion: string }>(null);

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagen(URL.createObjectURL(file));
  };

  const historialFiltrado = historial.filter((item) => {
    const coincideTexto = item.accion.toLowerCase().includes(filtroTexto.toLowerCase());
    const coincideFecha = !filtroFecha || item.fecha === filtroFecha;
    return coincideTexto && coincideFecha;
  });

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-foto">
          {imagen ? (
            <img src={imagen} alt="Perfil" />
          ) : (
            <div className="foto-placeholder">
              <FaUserCircle className="icon-placeholder" />
            </div>
          )}
          <label className="cambiar-foto">
            <FaCamera /> Cambiar Foto
            <input type="file" accept="image/*" onChange={handleImagen} hidden />
          </label>
        </div>

        <div className="perfil-datos">
          <div className="campo">
            <label><FaUserCircle /> Nombre</label>
            <input value="Juan Pérez" readOnly />
          </div>
          <div className="campo">
            <label><FaEnvelope /> Correo</label>
            <input value="juan@empresa.com" readOnly />
          </div>
          <div className="campo">
            <label><FaPhoneAlt /> Teléfono</label>
            <input value="3124567890" readOnly />
          </div>
          <div className="campo">
            <label><FaIdCard /> Cédula</label>
            <input value="1070123456" readOnly />
          </div>
          <div className="campo">
            <label><FaBuilding /> Área</label>
            <input value="Infraestructura" readOnly />
          </div>
        </div>

        <div className="perfil-historial">
          <h3>🛠️ Historial de Movimientos</h3>
          <div className="historial-filtros">
            <input
              type="text"
              placeholder="Filtrar por acción..."
              value={filtroTexto}
              onChange={(e) => setFiltroTexto(e.target.value)}
            />
            <input
              type="date"
              value={filtroFecha}
              onChange={(e) => setFiltroFecha(e.target.value)}
            />
          </div>
          <ul className="historial-lista">
            {historialFiltrado.map((item, index) => (
              <li key={index} onClick={() => setDetalleSeleccionado(item)}>
                <FaCalendarAlt /> {item.fecha} — <FaWrench /> {item.accion}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {detalleSeleccionado && (
        <div className="modal" onClick={() => setDetalleSeleccionado(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar-modal" onClick={() => setDetalleSeleccionado(null)}>
              <FaTimes />
            </button>
            <h4>📋 Detalles de Movimientos</h4>
            <p><strong>Fecha:</strong> {detalleSeleccionado.fecha}</p>
            <p><strong>Acción:</strong> {detalleSeleccionado.accion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;
