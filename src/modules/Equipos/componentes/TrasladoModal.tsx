import React, { useState } from 'react';
import '../estilos/TrasladoModal.css';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

const empleadosSimulados: Record<string, any> = {
  '123456789': { nombre: 'Carlos Ruiz', area: 'TI' },
  'carlos@empresa.com': { nombre: 'Carlos Ruiz', area: 'TI' },
  'PC-RUIZ': { nombre: 'Carlos Ruiz', area: 'TI' },
};

const ModalTraslado: React.FC<Props> = ({ visible, onClose }) => {
  const [empleado, setEmpleado] = useState<any | null>(null);
  const [equipoNuevo, setEquipoNuevo] = useState<any | null>(null);
  const [estadoFinal, setEstadoFinal] = useState(''); // ✅ Aquí sí va el useState

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
  const buscarEmpleado = watch('buscarEmpleado');
  const serialNuevo = watch('serialNuevo');

  if (!visible) return null;

  const onSubmit = (data: TrasladoFormData) => {
    console.log('Datos enviados:', { ...data, estadoFinal });
  };

  const buscarInfoEmpleado = () => {
    const resultado = empleadosSimulados[buscarEmpleado || ''];
    setEmpleado(resultado || null);
  };

  const buscarEquipoNuevo = () => {
    const resultado = equiposSimulados[serialNuevo || ''];
    setEquipoNuevo(resultado || null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="btn-cerrar" onClick={onClose}>×</button>
        <h2 className="modal-titulo">Formulario de Traslado</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <select {...register('tipoTraslado')} onChange={(e) => {
            setValue('tipoTraslado', e.target.value);
            setEmpleado(null);
            setValue('buscarEmpleado', '');
            setEquipoNuevo(null);
            setValue('serialNuevo', '');
            setEstadoFinal('');
          }}>
            <option value="">Seleccione tipo de traslado</option>
            <option value="ENTRADA">Ingreso</option>
            <option value="SALIDA">Devolución</option>
            <option value="CAMBIO">Cambio de equipos</option>
          </select>
          {errors.tipoTraslado && <p className="error">{errors.tipoTraslado.message}</p>}

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

          {(tipoTraslado === 'ENTRADA' || tipoTraslado === 'CAMBIO') && (
            <>
              <div className="formulario-grid">
                <div className="campo">
                  <label>Buscar empleado</label>
                  <input
                    type="text"
                    placeholder="Cédula / Hostname / Correo"
                    {...register('buscarEmpleado')}
                    onBlur={buscarInfoEmpleado}
                  />
                </div>
              </div>
              {empleado && (
                <div className="formulario-grid">
                  <div className="campo">
                    <label>Nombre</label>
                    <input type="text" value={empleado.nombre} disabled />
                  </div>
                  <div className="campo">
                    <label>Área</label>
                    <input type="text" value={empleado.area} disabled />
                  </div>
                </div>
              )}
            </>
          )}

          {tipoTraslado === 'CAMBIO' && (
            <div className="bloque-equipo">
              <h4>Equipo nuevo</h4>
              <input
                type="text"
                placeholder="Serial nuevo"
                {...register('serialNuevo')}
                onBlur={buscarEquipoNuevo}
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

          {tipoTraslado === 'SALIDA' && (
            <>
              <div className="mensaje-salida">
                <p>⚠ Este equipo será marcado como <strong>Inactivo - Bodega</strong>.</p>
              </div>

              <div className="estado-contenedor">
                <label className="estado-label">Estado final del equipo</label>
                <select
                  className="estado-select"
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

          <div className="campo-adjuntar">
            <label htmlFor="archivo">Adjuntar soporte:</label>
            <div className="adjuntar-area">
              <span>⬆</span>
              <input type="file" id="archivo" />
            </div>
          </div>

          <button className="btn-principal" type="submit">Generar Traslado</button>
        </form>
      </div>
    </div>
  );
};

export default ModalTraslado;
