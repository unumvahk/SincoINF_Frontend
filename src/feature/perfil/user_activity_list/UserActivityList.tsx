import { useState } from "react";
import { FaCalendarAlt, FaSearch, FaTimes, FaWrench } from "react-icons/fa";
import './UserActivityList.css';

const UserActivityList = () => {
  const [historial] = useState([
    { fecha: '2025-06-01', accion: 'Mantenimiento de laptop HP' },
    { fecha: '2025-06-15', accion: 'Instalación de licencia Office' },
    { fecha: '2025-06-20', accion: 'Actualización de antivirus' },
    { fecha: '2025-07-01', accion: 'Revisión de sistema operativo' },
  ]);

  const [filtroTexto, setFiltroTexto] = useState('');
  const [filtroFecha, setFiltroFecha] = useState('');
  const [detalleSeleccionado, setDetalleSeleccionado] = useState<null | { fecha: string; accion: string }>(null);

  const historialFiltrado = historial.filter((item) => {
    const coincideTexto = item.accion.toLowerCase().includes(filtroTexto.toLowerCase());
    const coincideFecha = !filtroFecha || item.fecha === filtroFecha;
    return coincideTexto && coincideFecha;
  });

  return (
    <div>
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

        {
          detalleSeleccionado && (
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
          )
        }
    </div>
  )
}

export default UserActivityList
