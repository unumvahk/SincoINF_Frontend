import React, { useState } from 'react';
import {
  FaBarcode, FaDesktop, FaMicrochip, FaMemory, FaHdd, FaCalendarAlt,
  FaToggleOn, FaMicrophoneAlt, FaPuzzlePiece, FaShieldAlt,
  FaClipboardCheck, FaHashtag, FaTimes
} from 'react-icons/fa';
import '../estilos/FormularioInformacionEquipo.css';

const FormularioInformacionEquipo: React.FC = () => {
  const [imagenModal, setImagenModal] = useState<string | null>(null);

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

 const imagenes = [
  '/img/logo.png',
  '/img/logo.png',
  '/img/logo.png',
];

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

      <div className="galeria-equipo">
        {imagenes.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Imagen ${index + 1}`}
            className="imagen-equipo"
            onClick={() => setImagenModal(url)}
          />
        ))}
      </div>

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

      {/* Modal de imagen */}
      {imagenModal && (
        <div className="modal-imagen-overlay" onClick={() => setImagenModal(null)}>
          <div className="modal-imagen-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="btn-cerrar-imagen" onClick={() => setImagenModal(null)}>
              <FaTimes />
            </button>
            <img src={imagenModal} alt="Vista ampliada" className="imagen-ampliada" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioInformacionEquipo;
