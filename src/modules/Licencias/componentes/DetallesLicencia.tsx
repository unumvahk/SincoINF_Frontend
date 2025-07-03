import React, { useState } from 'react';
import '../estilos/DetallesLicencia.css';
import ModalAsignarLicencia from './ModalAsignarLicencia';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Licencia {
  nombreLicencia: string;
  proveedorLicencia: string;
  fechaAdquisicionLicencia: string;
  fechaVencimientoLicencia: string;
  cantidadLicencia: number;
  plataforma?: string;
  esSoftware?: string;
  openSource?: string;
  enUso?: number;
  version?: string;
  estado?: string;
}

interface Props {
  licencia: Licencia;
}

const LicenciaDetalle: React.FC<Props> = ({ licencia }) => {
  const [mostrarAsignar, setMostrarAsignar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="contenedor-licencia">
      {/* 🔙 Botón de regreso con ícono */}
      <div className="contenedor-flecha-volver">
        <button className="btn-volver-icono" onClick={() => navigate('/licencias')}>
          <FaArrowLeft />
        </button>
      </div>

      <div className="tarjeta-licencia">
        <h2 className="titulo-licencia">Detalles de la Licencia</h2>

        <div className="grid-licencia">
          <div className="campo-licencia">
            <label>Nombre</label>
            <input type="text" value={licencia.nombreLicencia} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Licencias Disponibles</label>
            <input type="text" value={licencia.cantidadLicencia} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Plataforma</label>
            <input type="text" value={licencia.plataforma || 'N/A'} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Proveedor</label>
            <input type="text" value={licencia.proveedorLicencia} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Fecha de Ingreso</label>
            <input type="text" value={licencia.fechaAdquisicionLicencia} readOnly />
          </div>
          <div className="campo-licencia">
            <label>¿Es Software?</label>
            <input type="text" value={licencia.esSoftware || 'N/A'} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Fecha de Vencimiento</label>
            <input type="text" value={licencia.fechaVencimientoLicencia} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Open Source</label>
            <input type="text" value={licencia.openSource || 'N/A'} readOnly />
          </div>
          <div className="campo-licencia">
            <label>En Uso</label>
            <input type="text" value={licencia.enUso || 0} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Versión</label>
            <input type="text" value={licencia.version || 'N/A'} readOnly />
          </div>
          <div className="campo-licencia">
            <label>Estado</label>
            <input type="text" value={licencia.estado || 'Activa'} readOnly />
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
