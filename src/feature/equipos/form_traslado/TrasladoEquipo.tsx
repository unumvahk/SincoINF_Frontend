import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FaMicrochip, FaUserTie, FaEnvelope, FaBuilding,
  FaMicrophoneAlt, FaBarcode, FaMemory, FaHdd, FaMapSigns,
  FaToggleOn, FaHashtag, FaIdCard, FaCalendarAlt,FaClipboardCheck,FaDesktop,FaPuzzlePiece,FaShieldAlt
} from 'react-icons/fa';
import './TrasladoEquipo.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const trasladoSchema = z.object({
  tipoTraslado: z.string().nonempty('El tipo de traslado es obligatorio'),
  buscarEmpleado: z.string().optional(),
  serialNuevo: z.string().optional(),
});

type TrasladoFormData = z.infer<typeof trasladoSchema>;

const equipoActual = {
  serial: 'ABC123',
  tipo: 'Portátil',
  marca: 'Lenovo',
  modelo: 'ThinkPad',
  procesador: 'Intel i5',
  nucleos: 4,
  ram: '8 GB',
  disco: '512 GB SSD',
  tarj_grafica: 'Integrada',
  sistema: 'Windows 10',
  fecha_ingreso: '2023-05-10',
  garantia: 12,
  sede: 'Oficina 2',
  ubicacion: 'Oficina 2B',
  estado: 'Activo',
};

const equiposSimulados: Record<string, any> = {
  ABC2: {
    serial: 'ABC2',
    tipo: 'Torre',
    marca: 'Dell',
    modelo: 'OptiPlex',
    procesador: 'Intel i7',
    nucleos: 8,
    ram: '16 GB',
    disco: '1 TB HDD',
    tarj_grafica: 'NVIDIA GTX 1050',
    sistema: 'Windows 11',
    fecha_ingreso: '2024-01-15',
    garantia: 24,
    sede: 'Oficina 3',
    ubicacion: 'Oficina 3A',
    estado: 'Activo',
  },
};

const empleadosSimulados: Record<string, any> = {
  '123456789': {
    nombre: 'Carlos Ruiz',
    cedula: '123456789',
    correo: 'carlos@empresa.com',
    area: 'TI',
    cargo: 'Analista',
  },
  'carlos@empresa.com': {
    nombre: 'Carlos Ruiz',
    cedula: '123456789',
    correo: 'carlos@empresa.com',
    area: 'TI',
    cargo: 'Analista',
  },
  'PC-RUIZ': {
    nombre: 'Carlos Ruiz',
    cedula: '123456789',
    correo: 'carlos@empresa.com',
    area: 'TI',
    cargo: 'Analista',
  },
};

const ModalTraslado: React.FC<Props> = ({ visible, onClose }) => {
  const [empleado, setEmpleado] = useState<any | null>(null);
  const [equipoNuevo, setEquipoNuevo] = useState<any | null>(null);
  const [estadoFinal, setEstadoFinal] = useState('');
  const [tipoBusqueda, setTipoBusqueda] = useState('cedula');
  const [coincidencias, setCoincidencias] = useState<any[]>([]);
  const [coincidenciasEquipos, setCoincidenciasEquipos] = useState<any[]>([]);
  const [trasladoExitoso, setTrasladoExitoso] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TrasladoFormData>({
    resolver: zodResolver(trasladoSchema),
  });

  const tipoTraslado = watch('tipoTraslado');
  const serialNuevo = watch('serialNuevo');

  if (!visible) return null;

  const onSubmit = (data: TrasladoFormData) => {
    console.log('Datos enviados:', { ...data, estadoFinal });
    setTrasladoExitoso(true);
    setTimeout(() => {
      setTrasladoExitoso(false);
      onClose();
    }, 1000);
  };

  const buscarInfoEmpleado = (valor: string) => {
    const resultados = Object.entries(empleadosSimulados)
      .filter(([clave]) => clave.toLowerCase().includes(valor.toLowerCase()))
      .map(([clave, info]) => ({ id: clave, ...info }));
    setCoincidencias(resultados);
  };

  const buscarInfoEquipoNuevo = (valor: string) => {
    const resultados = Object.entries(equiposSimulados)
      .filter(([clave]) => clave.toLowerCase().includes(valor.toLowerCase()))
      .map(([clave, info]) => ({ id: clave, ...info }));
    setCoincidenciasEquipos(resultados);
  };

  const seleccionarEmpleado = (id: string) => {
    const resultado = empleadosSimulados[id];
    setEmpleado(resultado || null);
    setValue('buscarEmpleado', id);
    setCoincidencias([]);
  };

  const seleccionarEquipoNuevo = (id: string) => {
    const resultado = equiposSimulados[id];
    setEquipoNuevo(resultado || null);
    setValue('serialNuevo', id);
    setCoincidenciasEquipos([]);
  };

  const camposEquipo = [
    'serial', 'tipo', 'marca', 'modelo', 'procesador', 'nucleos',
    'ram', 'disco', 'tarj_grafica', 'sistema', 'fecha_ingreso',
    'garantia', 'sede', 'ubicacion', 'estado',
  ];

  const iconos = {
    placa: <FaHashtag /> ,
    serial: <FaBarcode />,
    marca: <FaClipboardCheck />,
    modelo: <FaDesktop />,
    disco: <FaHdd />,
    procesador: <FaMicrochip />,
    nucleos: <FaMicrophoneAlt />,
    ram: <FaMemory />,
    tarj_grafica: <FaPuzzlePiece />,
    fecha_ingreso: <FaCalendarAlt />,
    garantia: <FaShieldAlt />,
    ubicacion: <FaMapSigns />,
    estado: <FaToggleOn />,
  };


  return (
    <div className="traslado-modal-overlay">
      <div className="traslado-modal-contenido">
        <button className="traslado-btn-cerrar" onClick={onClose}>×</button>
        <h2 className="traslado-modal-titulo">Formulario de Traslado</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <select
            className="traslado-select"
            {...register('tipoTraslado')}
            onChange={(e) => {
              setValue('tipoTraslado', e.target.value);
              setEmpleado(null);
              setValue('buscarEmpleado', '');
              setEquipoNuevo(null);
              setValue('serialNuevo', '');
              setEstadoFinal('');
              setCoincidencias([]);
              setCoincidenciasEquipos([]);
            }}
          >
            <option value="">Seleccione tipo de traslado</option>
            <option value="ENTRADA">Ingreso</option>
            <option value="SALIDA">Devolución</option>
            <option value="CAMBIO">Cambio de equipos</option>
          </select>
          {errors.tipoTraslado && <p className="traslado-error">{errors.tipoTraslado.message}</p>}

          {/* Equipo actual */}
          <div className="traslado-bloque-equipo">
            <h4 className="traslado-titulo-bloque">Equipo Actual</h4>
            {camposEquipo.map((key) => (
              <div className="traslado-info-linea" key={key}>
                <span className="traslado-icono">{iconos[key as keyof typeof iconos]}</span>
                <span className="traslado-info-etiqueta">{key.replace(/_/g, ' ').toUpperCase()}:</span>
                <span className="traslado-info-valor">{String(equipoActual[key as keyof typeof equipoActual] ?? '—')}</span>
              </div>
            ))}
          </div>

          {(tipoTraslado === 'ENTRADA' || tipoTraslado === 'CAMBIO') && (
            <>
              <label className="traslado-label">Buscar por:</label>
              <select className="traslado-select" value={tipoBusqueda} onChange={(e) => {
                setTipoBusqueda(e.target.value);
                setEmpleado(null);
                setCoincidencias([]);
              }}>
                <option value="cedula">Cédula</option>
                <option value="correo">Correo</option>
                <option value="hostname">Hostname</option>
              </select>

              <input
                type="text"
                className="traslado-input"
                placeholder={`Buscar por ${tipoBusqueda}...`}
                {...register('buscarEmpleado')}
                onChange={(e) => {
                  setValue('buscarEmpleado', e.target.value);
                  buscarInfoEmpleado(e.target.value);
                }}
              />
              {coincidencias.length > 0 && (
                <ul className="traslado-lista-coincidencias">
                  {coincidencias.map((item, index) => (
                    <li key={index} onClick={() => seleccionarEmpleado(item.id)}>
                      <strong>{item.nombre}</strong> – {item.cedula} – {item.correo} – {item.area} – {item.cargo}
                    </li>
                  ))}
                </ul>
              )}

              {empleado && (
                <div className="traslado-bloque-equipo">
                  <h4 className="traslado-titulo-bloque">Empleado Seleccionado</h4>
                  {Object.entries(empleado).map(([key, val]) => (
                    <div className="traslado-info-linea" key={key}>
                      <span className="traslado-icono">
                        {{
                          nombre: <FaUserTie />,
                          cedula: <FaIdCard />,
                          correo: <FaEnvelope />,
                          area: <FaBuilding />,
                          cargo: <FaUserTie />,
                        }[key]}
                      </span>
                      <span className="traslado-info-etiqueta">{key.toUpperCase()}:</span>
                      <span className="traslado-info-valor">{String(val)}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {tipoTraslado === 'CAMBIO' && (
            <div className="traslado-bloque-equipo">
              <h4 className="traslado-titulo-bloque">Equipo Nuevo</h4>
              <input
                type="text"
                placeholder="Buscar serial nuevo..."
                className="traslado-input"
                {...register('serialNuevo')}
                onChange={(e) => {
                  setValue('serialNuevo', e.target.value);
                  buscarInfoEquipoNuevo(e.target.value);
                }}
              />

              {coincidenciasEquipos.length > 0 && (
                <ul className="traslado-lista-coincidencias">
                  {coincidenciasEquipos.map((item, index) => (
                    <li key={index} onClick={() => seleccionarEquipoNuevo(item.id)}>
                      <strong>{item.serial}</strong> – {item.tipo} – {item.marca}
                    </li>
                  ))}
                </ul>
              )}

              {equipoNuevo && (
                <>
                  {camposEquipo.map((key) => (
                    <div className="traslado-info-linea" key={key}>
                      <span className="traslado-icono">{iconos[key as keyof typeof iconos]}</span>
                      <span className="traslado-info-etiqueta">{key.replace(/_/g, ' ').toUpperCase()}:</span>
                      <span className="traslado-info-valor">{String(equipoNuevo[key] ?? '—')}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {tipoTraslado === 'SALIDA' && (
            <>
              <div className="traslado-mensaje-salida">
                <p>⚠ Este equipo cambiará a estado: <strong>Activo, Inactivo, Mantenimiento o Archivo</strong>.</p>
              </div>
              <div className="traslado-estado-contenedor">
                <label className="traslado-estado-label">Estado final del equipo</label>
                <select
                  className="traslado-estado-select"
                  value={estadoFinal}
                  onChange={(e) => setEstadoFinal(e.target.value)}
                >
                  <option value="" disabled>Seleccione estado...</option>
                  <option value="ACTIVO">Activo</option>
                  <option value="INACTIVO">Inactivo</option>
                  <option value="MANTENIMIENTO">Mantenimiento</option>
                  <option value="ARCHIVO">Archivo</option>
                </select>
              </div>
            </>
          )}

          <div className="traslado-campo-adjuntar">
            <label className="traslado-label" htmlFor="archivo">Adjuntar soporte:</label>
            <div className="traslado-adjuntar-area">
              <span>⬆</span>
              <input type="file" id="archivo" className="traslado-input-file" />
            </div>
          </div>

          <button className="traslado-btn-principal" type="submit">
            Generar Traslado
          </button>

          {trasladoExitoso && (
            <div className="traslado-mensaje-exito">
              ✅ El traslado fue generado exitosamente.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalTraslado;
