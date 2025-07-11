import React, { useState } from 'react';
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaIdCard,
  FaBuilding,
  FaCamera,
  FaSignOutAlt,
  FaCalendarAlt,
  FaWrench,
  FaTimes,
  FaSearch
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './PerfilUsuario.css';

const PerfilUsuarioCard: React.FC = () => {
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

  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    navigate('/'); 
  };

  const historialFiltrado = historial.filter((item) => {
    const coincideTexto = item.accion.toLowerCase().includes(filtroTexto.toLowerCase());
    const coincideFecha = !filtroFecha || item.fecha === filtroFecha;
    return coincideTexto && coincideFecha;
  });

  return (
    <div className="perfil-card-container">
      <div className="perfil-card-box">
        <div className="perfil-card-foto">
          {imagen ? (
            <img src={imagen} alt="Perfil" />
          ) : (
            <div className="foto-card-placeholder">
              <FaUserCircle className="icon-card-placeholder" />
            </div>
          )}
          <label className="card-cambiar-foto">
            <FaCamera /> Cambiar Foto
            <input type="file" accept="image/*" onChange={handleImagen} hidden />
          </label>
        </div>

        <div className="perfil-card-datos">
          <div className="card-campo">
            <label><FaUserCircle /> Nombre</label>
            <input value="Juan Pérez" readOnly />
          </div>
          <div className="card-campo">
            <label><FaEnvelope /> Correo</label>
            <input value="juan@empresa.com" readOnly />
          </div>
          <div className="card-campo">
            <label><FaPhoneAlt /> Teléfono</label>
            <input value="3124567890" readOnly />
          </div>
          <div className="card-campo">
            <label><FaIdCard /> Cédula</label>
            <input value="1070123456" readOnly />
          </div>
          <div className="card-campo">
            <label><FaBuilding /> Área</label>
            <input value="Infraestructura" readOnly />
          </div>
        </div>

        <div className="perfil-card-historial">
          <h3><FaWrench /> Historial de Movimientos</h3>
          <div className="card-historial-filtros">
            <div className="card-campo-filtro">
              <FaSearch className="card-icono-filtro" />
              <input
                type="text"
                placeholder="Filtrar por acción..."
                value={filtroTexto}
                onChange={(e) => setFiltroTexto(e.target.value)}
              />
            </div>
            <input
              type="date"
              value={filtroFecha}
              onChange={(e) => setFiltroFecha(e.target.value)}
              className="input-fecha-personalizada"
            />

          </div>
          <ul className="card-historial-lista">
            {historialFiltrado.map((item, index) => (
              <li key={index} onClick={() => setDetalleSeleccionado(item)}>
                <FaCalendarAlt /> {item.fecha} — <FaWrench /> {item.accion}
              </li>
            ))}
          </ul>
        </div>

        <button className="card-cerrar-sesion" onClick={handleCerrarSesion}>
          <FaSignOutAlt /> Cerrar Sesión
        </button>
      </div>

      {detalleSeleccionado && (
        <div className="card-modal" onClick={() => setDetalleSeleccionado(null)}>
          <div className="card-modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="card-cerrar-modal" onClick={() => setDetalleSeleccionado(null)}>
              <FaTimes />
            </button>
            <h4><FaWrench /> Detalles de Movimiento</h4>
            <p><strong>Fecha:</strong> {detalleSeleccionado.fecha}</p>
            <p><strong>Acción:</strong> {detalleSeleccionado.accion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuarioCard;
