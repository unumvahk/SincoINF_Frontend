import React, { useState } from 'react';
import '../estilos/ModalMantenimiento.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ModalMantenimiento: React.FC<Props> = ({ visible, onClose }) => {
  const [formularioActivo, setFormularioActivo] = useState<'proveedor' | 'preventivo'>('proveedor');

  if (!visible) return null;

  return (
    <div className="modal-overlay modal-mantenimiento">
      <div className="modal-contenido modal-mantenimiento">
        <button className="btn-cerrar" onClick={onClose}>×</button>
        <h2 className="modal-titulo">Formulario de Mantenimiento</h2>

        <div className="tabs-mantenimiento">
          <button
            className={formularioActivo === 'proveedor' ? 'activo' : ''}
            onClick={() => setFormularioActivo('proveedor')}
          >
            Proveedor
          </button>
          <button
            className={formularioActivo === 'preventivo' ? 'activo' : ''}
            onClick={() => setFormularioActivo('preventivo')}
          >
            Preventivo
          </button>
        </div>

        {formularioActivo === 'proveedor' ? (
          <form className="formulario-mant">
            <label>Nombre del proveedor</label>
            <input type="text" placeholder="Ej: TecnoSoluciones S.A.S." />
            <label>Teléfono</label>
            <input type="text" placeholder="Ej: 3101234567" />
            <label>Correo electrónico</label>
            <input type="email" placeholder="Ej: contacto@proveedor.com" />
            <button className="btn-principal" type="submit">Guardar Proveedor</button>
          </form>
        ) : (
          <form className="formulario-mant">
            <label>Fecha del mantenimiento</label>
            <input type="date" />
            <label>Descripción</label>
            <textarea placeholder="Describa brevemente el mantenimiento preventivo" rows={4} />
            <label>Responsable</label>
            <input type="text" placeholder="Ej: Juan Pérez" />
            <button className="btn-principal" type="submit">Registrar Preventivo</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalMantenimiento;
