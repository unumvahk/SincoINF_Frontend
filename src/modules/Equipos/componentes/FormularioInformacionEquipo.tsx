import React from 'react';
import {
  FaBarcode,
  FaDesktop,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaCalendarAlt,
  FaToggleOn,
  FaMicrophoneAlt,
  FaPuzzlePiece,
  FaShieldAlt,
  FaClipboardCheck,
  FaHashtag,
} from 'react-icons/fa';
import '../estilos/FormularioInformacionEquipo.css';

const FormularioInformacionEquipo: React.FC = () => {
  const datosEquipo = {
    placa: 'EQ-001',
    serial: 'ABC123456',
    marca: 'HP',
    modelo: 'ProBook 450 G7',
    disco: '512 GB',
    procesador: 'Intel Core i5',
    nucleos: '4',
    ram: '16 GB',
    tarj_grafica: 'Intel UHD Graphics',
    fecha_ingreso: '2024-11-15',
    garantia: '12 meses',
    estado: 'Activo',
  };

  const campos = [
    { id: 'placa', label: 'Placa', icono: <FaHashtag /> },
    { id: 'serial', label: 'Serial', icono: <FaBarcode /> },
    { id: 'marca', label: 'Marca', icono: <FaClipboardCheck /> },
    { id: 'modelo', label: 'Modelo', icono: <FaDesktop /> },
    { id: 'disco', label: 'Disco', icono: <FaHdd /> },
    { id: 'procesador', label: 'Procesador', icono: <FaMicrochip /> },
    { id: 'nucleos', label: 'Núcleos', icono: <FaMicrophoneAlt /> },
    { id: 'ram', label: 'Memoria RAM', icono: <FaMemory /> },
    { id: 'tarj_grafica', label: 'Tarjeta gráfica', icono: <FaPuzzlePiece /> },
    { id: 'fecha_ingreso', label: 'Fecha de ingreso', icono: <FaCalendarAlt /> },
    { id: 'garantia', label: 'Garantía', icono: <FaShieldAlt /> },
    { id: 'estado', label: 'Estado', icono: <FaToggleOn /> },
  ];

  return (
    <div className="tarjeta-equipo">
      <h2 className="titulo-equipo">Información del equipo</h2>
      <form className="grid-equipo">
        {campos.map(({ id, label, icono }) => (
          <div className="campo-equipo" key={id}>
            <label htmlFor={id}>
              {icono} {label}
            </label>
            <input type="text" id={id} value={datosEquipo[id as keyof typeof datosEquipo]} readOnly />
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormularioInformacionEquipo;
