import React, { useState } from 'react';
import '../estilos/LicenciaDetalle.css';
import ModalAsignarLicencia from './ModalAsignarLicencia';
import ModalConfirmacion from './ModalConfirmacion';

const LicenciaDetalle: React.FC = () => {
  const [mostrarAsignar, setMostrarAsignar] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  
  const handleInactivar = () => {
    setMostrarConfirmacion(true);
  };

  const confirmarInactivacion = () => {
    setMostrarConfirmacion(false);
    alert('Licencia inactivada correctamente');
  };

  const licencia = {
    nombre: 'Microsoft Office',
    proveedor: 'Microsoft',
    cantidad: 50,
    enUso: 35,
    disponibles: 15,
    fechaIngreso: '2023-01-01',
    fechaVencimiento: '2026-01-01',
    version: '365',
    plataforma: 'Windows',
    software: 'Sí',
    openSource: 'No',
    estado: 'Activa',
  };

  return (
    <div className="contenedor-licencia">
      <div className="tarjeta-licencia">
        <h2 className="titulo-licencia">Detalles Licencia</h2>
        <div className="grid-licencia">
          <div className="campo-licencia">
            <label>Nombre</label>
            <input type="text" value={licencia.nombre} disabled />
          </div>
          <div className="campo-licencia">
            <label>Licencias Disponibles</label>
            <input type="text" value={licencia.disponibles} disabled />
          </div>
          <div className="campo-licencia">
            <label>Plataforma</label>
            <input type="text" value={licencia.plataforma} disabled />
          </div>
          <div className="campo-licencia">
            <label>Proveedor</label>
            <input type="text" value={licencia.proveedor} disabled />
          </div>
          <div className="campo-licencia">
            <label>Fecha de Ingreso</label>
            <input type="text" value={licencia.fechaIngreso} disabled />
          </div>
          <div className="campo-licencia">
            <label>¿Es Software?</label>
            <input type="text" value={licencia.software} disabled />
          </div>
          <div className="campo-licencia">
            <label>Cantidad</label>
            <input type="text" value={licencia.cantidad} disabled />
          </div>
          <div className="campo-licencia">
            <label>Fecha de Vencimiento</label>
            <input type="text" value={licencia.fechaVencimiento} disabled />
          </div>
          <div className="campo-licencia">
            <label>Open Source</label>
            <input type="text" value={licencia.openSource} disabled />
          </div>
          <div className="campo-licencia">
            <label>En Uso</label>
            <input type="text" value={licencia.enUso} disabled />
          </div>
          <div className="campo-licencia">
            <label>Versión</label>
            <input type="text" value={licencia.version} disabled />
          </div>
          <div className="campo-licencia">
            <label>Estado</label>
            <input type="text" value={licencia.estado} disabled />
          </div>
        </div>

        <div className="botones-licencia">
          <button className="btn verde" onClick={() => setMostrarAsignar(true)}>Asignar</button>
          <button className="btn rojo" onClick={handleInactivar}>Inactivar</button>
        </div>
      </div>

      <ModalAsignarLicencia visible={mostrarAsignar} onClose={() => setMostrarAsignar(false)} />
      <ModalConfirmacion
        visible={mostrarConfirmacion}
        onClose={() => setMostrarConfirmacion(false)}
        onConfirmar={confirmarInactivacion}
      />
    </div>
  );
};

export default LicenciaDetalle;
