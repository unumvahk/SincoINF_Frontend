import React, { useState } from 'react';
import '../estilos/TrasladoModal.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const equipoActualSimulado = {
  serial: 'ABC123',
  marca: 'HP',
  modelo: 'EliteBook',
  tipo: 'Portátil',
  area: 'Soporte',
  ubicacion: 'Bogotá',
};

const equiposSimulados: Record<string, any> = {
  'XYZ789': {
    serial: 'XYZ789',
    marca: 'Dell',
    modelo: 'Latitude',
    tipo: 'Torre',
    area: 'TI',
    ubicacion: 'Medellín',
  },
};

const ModalTraslado: React.FC<Props> = ({ visible, onClose }) => {
  const [tipoTraslado, setTipoTraslado] = useState('');
  const [serialNuevo, setSerialNuevo] = useState('');
  const [equipoNuevo, setEquipoNuevo] = useState<any | null>(null);

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [area, setArea] = useState('');

  if (!visible) return null;

  const buscarEquipo = (serial: string): any | null => {
    return equiposSimulados[serial] || null;
  };

  const handleBuscarNuevo = () => {
    const equipo = buscarEquipo(serialNuevo);
    setEquipoNuevo(equipo);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="btn-cerrar" onClick={onClose}>×</button>
        <h2 className="modal-titulo">Formulario de Traslado</h2>

        {/* Tipo de traslado */}
        <select value={tipoTraslado} onChange={(e) => {
          setTipoTraslado(e.target.value);
          setEquipoNuevo(null);
          setSerialNuevo('');
        }}>
          <option value="">Seleccione tipo de traslado</option>
          <option value="ENTRADA">Ingreso</option>
          <option value="SALIDA">Devolución</option>
          <option value="CAMBIO">Cambio de equipos</option>
        </select>

        {/* Equipo actual (siempre visible) */}
        <div className="bloque-equipo">
          <h4>Equipo actual</h4>
          <div className="vista-equipo">
            <p><strong>Serial:</strong> {equipoActualSimulado.serial}</p>
            <p><strong>Marca:</strong> {equipoActualSimulado.marca}</p>
            <p><strong>Modelo:</strong> {equipoActualSimulado.modelo}</p>
            <p><strong>Tipo:</strong> {equipoActualSimulado.tipo}</p>
            <p><strong>Área:</strong> {equipoActualSimulado.area}</p>
            <p><strong>Ubicación:</strong> {equipoActualSimulado.ubicacion}</p>
          </div>
        </div>

        {/* Información del colaborador (siempre visible) */}
        <div className="formulario-grid">
          <div className="campo">
            <label>Cédula del colaborador</label>
            <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
          </div>
          <div className="campo">
            <label>Nombre completo</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="campo">
            <label>Área asignada</label>
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          </div>
        </div>

        {/* Equipo nuevo solo en CAMBIO */}
        {tipoTraslado === 'CAMBIO' && (
          <div className="bloque-equipo">
            <h4>Nuevo equipo</h4>
            <input
              type="text"
              placeholder="Serial equipo nuevo"
              value={serialNuevo}
              onChange={(e) => setSerialNuevo(e.target.value)}
              onBlur={handleBuscarNuevo}
            />
            {equipoNuevo && (
              <div className="vista-equipo">
                <p><strong>Marca:</strong> {equipoNuevo.marca}</p>
                <p><strong>Modelo:</strong> {equipoNuevo.modelo}</p>
                <p><strong>Tipo:</strong> {equipoNuevo.tipo}</p>
                <p><strong>Área:</strong> {equipoNuevo.area}</p>
                <p><strong>Ubicación:</strong> {equipoNuevo.ubicacion}</p>
              </div>
            )}
          </div>
        )}

        {/* Adjuntar soporte */}
        <div className="campo-adjuntar">
          <label htmlFor="archivo">Adjuntar soporte:</label>
          <div className="adjuntar-area">
            <span>⬆</span>
            <input type="file" id="archivo" />
          </div>
        </div>

        <button className="btn-principal">Generar Traslado</button>
      </div>
    </div>
  );
};

export default ModalTraslado;
