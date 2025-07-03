import React, { useState } from 'react';
import '../estilos/DetallesLicencia.css';
import ModalAsignarLicencia from './ModalAsignarLicencia';

const LicenciaDetalle: React.FC = () => {
  const [mostrarAsignar, setMostrarAsignar] = useState(false);

  return (
    <div className="contenedor-licencia">
      <div className="tarjeta-licencia">
        <h2 className="titulo-licencia">Detalles de la Licencia</h2>

        <div className="grid-licencia">
          <div className="campo-licencia">
            <label>Nombre</label>
            <input type="text" placeholder="Ej: Microsoft Office" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Licencias Disponibles</label>
            <input type="text" placeholder="Ej: 15" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Plataforma</label>
            <input type="text" placeholder="Ej: Windows" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Proveedor</label>
            <input type="text" placeholder="Ej: Microsoft" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Fecha de Ingreso</label>
            <input type="text" placeholder="Ej: 2023-01-01" readOnly />
          </div>
          <div className="campo-licencia">
            <label>¿Es Software?</label>
            <input type="text" placeholder="Ej: Sí" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Cantidad</label>
            <input type="text" placeholder="Ej: 50" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Fecha de Vencimiento</label>
            <input type="text" placeholder="Ej: 2026-01-01" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Open Source</label>
            <input type="text" placeholder="Ej: No" readOnly />
          </div>
          <div className="campo-licencia">
            <label>En Uso</label>
            <input type="text" placeholder="Ej: 35" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Versión</label>
            <input type="text" placeholder="Ej: 365" readOnly />
          </div>
          <div className="campo-licencia">
            <label>Estado</label>
            <input type="text" placeholder="Ej: Activa" readOnly />
          </div>
        </div>

        <div className="contenedor-boton-asignar">
          <button
            className="btn-asignar-licencia"
            onClick={() => setMostrarAsignar(true)}
          >
            Asignar Licencia
          </button>
        </div>
      </div>

      <ModalAsignarLicencia
        visible={mostrarAsignar}
        onClose={() => setMostrarAsignar(false)}
      />
    </div>
  );
};

export default LicenciaDetalle;
