import React from 'react';
import {
  FaHashtag,
  FaLaptop,
  FaBarcode,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaWindows,
  FaMapMarkerAlt,
  FaMapSigns,
  FaToggleOn,
} from 'react-icons/fa';
import '../estilos/FormularioInformacionEquipo.css';

const FormularioInformacionEquipo: React.FC = () => {
  const datosEquipo = {
    serial: 'ABC123',
    tipo: 'Portátil',
    marca: 'Lenovo',
    procesador: 'Intel i5',
    ram: '8 GB',
    disco: '512 GB SSD',
    sistema: 'Windows 10',
    sede: 'Oficina 2',
    ubicacion: 'Oficina 2B',
    estado: 'Activo',
  };

  const campos = [
    { id: 'serial', label: 'Serial', icono: <FaHashtag /> },
    { id: 'tipo', label: 'Tipo', icono: <FaLaptop /> },
    { id: 'marca', label: 'Marca', icono: <FaBarcode /> },
    { id: 'procesador', label: 'Procesador', icono: <FaMicrochip /> },
    { id: 'ram', label: 'Memoria RAM', icono: <FaMemory /> },
    { id: 'disco', label: 'Disco', icono: <FaHdd /> },
    { id: 'sistema', label: 'Sistema operativo', icono: <FaWindows /> },
    { id: 'sede', label: 'Sede', icono: <FaMapMarkerAlt /> },
    { id: 'ubicacion', label: 'Ubicación', icono: <FaMapSigns /> },
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
