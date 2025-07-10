import React, { useState } from 'react';
import './ModalMantenimiento.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const proveedoresSimulados: Record<string, any> = {
  'tecnosoluciones': {
    nombre: 'TecnoSoluciones S.A.S.',
    correo: 'contacto@tecnosoluciones.com',
    nit: '900123456-1',
    telefono: '3101234567',
  },
  'soporteplus': {
    nombre: 'Soporte Plus',
    correo: 'soporte@plus.com',
    nit: '800987654-2',
    telefono: '3209876543',
  },
};

const ModalMantenimiento: React.FC<Props> = ({ visible, onClose }) => {
  const [formularioActivo, setFormularioActivo] = useState<'proveedor' | 'preventivo'>('proveedor');
  const [busqueda, setBusqueda] = useState('');
  const [coincidencias, setCoincidencias] = useState<any[]>([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState<any | null>(null);
  const [accion, setAccion] = useState('');
  const [garantia, setGarantia] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [mantenimientoExitoso, setMantenimientoExitoso] = useState(false);

  if (!visible) return null;

  const buscarProveedor = (valor: string) => {
    setBusqueda(valor);
    const resultados = Object.values(proveedoresSimulados).filter(p =>
      p.nombre.toLowerCase().includes(valor.toLowerCase()) ||
      p.correo.toLowerCase().includes(valor.toLowerCase())
    );
    setCoincidencias(resultados);
  };

  const seleccionarProveedor = (proveedor: any) => {
    setProveedorSeleccionado(proveedor);
    setBusqueda('');
    setCoincidencias([]);
  };

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      proveedor: proveedorSeleccionado,
      accion,
      garantia: accion === 'RETIRO' ? garantia : null,
      observaciones,
    };

    console.log('Datos enviados:', datos);
    setMantenimientoExitoso(true);

    setTimeout(() => {
      setMantenimientoExitoso(false);
      onClose();
    }, 2000);
  };
  const handleGuardarPreventivo = (e: React.FormEvent) => {
  e.preventDefault();

  // Aquí puedes capturar los valores si quieres
  console.log('Mantenimiento preventivo registrado.');

  setMantenimientoExitoso(true);
  setTimeout(() => {
    setMantenimientoExitoso(false);
    onClose();
  }, 2000);
};


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
          <form className="formulario-mant" onSubmit={handleGuardar}>
            <label>Buscar proveedor por nombre o correo</label>
            <input
              type="text"
              placeholder="Ej: Tecno o contacto@"
              value={busqueda}
              onChange={(e) => buscarProveedor(e.target.value)}
            />

            {coincidencias.length > 0 && (
              <ul className="lista-coincidencias">
                {coincidencias.map((item, i) => (
                  <li key={i} onClick={() => seleccionarProveedor(item)}>
                    <strong>{item.nombre}</strong> – {item.correo}
                  </li>
                ))}
              </ul>
            )}

            {proveedorSeleccionado && (
              <div className="bloque-info">
                <p><strong>Nombre:</strong> {proveedorSeleccionado.nombre}</p>
                <p><strong>Correo:</strong> {proveedorSeleccionado.correo}</p>
                <p><strong>NIT:</strong> {proveedorSeleccionado.nit}</p>
                <p><strong>Teléfono:</strong> {proveedorSeleccionado.telefono}</p>
              </div>
            )}

            <label>¿Se va a retirar o a llevar el equipo?</label>
            <select value={accion} onChange={(e) => setAccion(e.target.value)}>
              <option value="">Seleccione una opción</option>
              <option value="RETIRO">Retirar</option>
              <option value="LLEVAR">Llevar</option>
            </select>

            {accion === 'RETIRO' && (
              <>
                <label>Garantía del mantenimiento (en meses)</label>
                <input
                  type="number"
                  placeholder="Ej: 6"
                  value={garantia}
                  onChange={(e) => setGarantia(e.target.value)}
                />
              </>
            )}

            <label>Observaciones</label>
            <textarea
              placeholder="Escriba detalles u observaciones"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              rows={3}
            />

            <button className="btn-principal" type="submit">
              Guardar Mantenimiento
            </button>

            {mantenimientoExitoso && (
              <div className="mensaje-exito">
                ✅ Mantenimiento registrado correctamente.
              </div>
            )}
          </form>
        ) : (
          <form className="formulario-mant" onSubmit={handleGuardarPreventivo}>
            <label>Fecha del mantenimiento</label>
            <input type="date" />
            <label>Descripción</label>
            <textarea placeholder="Describa brevemente el mantenimiento preventivo" rows={4} />
            <label>Responsable</label>
            <input type="text" placeholder="Ej: Juan Pérez" />
            <button className="btn-principal" type="submit">Registrar Preventivo</button>
            {mantenimientoExitoso && (
              <div className="mensaje-exito">
                ✅ Mantenimiento registrado correctamente.
              </div>
            )}

          </form>
        )}
      </div>
    </div>
  );
};

export default ModalMantenimiento;
