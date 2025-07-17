import React, { useState } from 'react';
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaIdCard,
  FaBuilding,
  FaCamera,
} from 'react-icons/fa';
import './PerfilUsuario.css';

const PerfilUsuarioCard: React.FC = () => {
  const [imagen, setImagen] = useState<string | null>(null);

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagen(URL.createObjectURL(file));
  };

  return (
    <div className="perfil-card-container">
      <div className="perfil-card-box">
        <div className="perfil-card-foto">
          {
            imagen ? (
              <img src={imagen} alt="Perfil" />
            ) : (
              <div className="foto-card-placeholder">
                <FaUserCircle className="icon-card-placeholder" />
              </div>
            )
          }
          <label className="card-cambiar-foto">
            <FaCamera /> Cambiar Foto
            <input type="file" accept="image/*" onChange={handleImagen} hidden />
          </label>
        </div>

        <div className="perfil-card-datos">
          <div className="card-campo">
            <label><FaUserCircle /> Nombre</label>
            <input value="Juan Pérez" readOnly />
          </div>
          <div className="card-campo">
            <label><FaEnvelope /> Correo</label>
            <input value="juan@empresa.com" readOnly />
          </div>
          <div className="card-campo">
            <label><FaPhoneAlt /> Teléfono</label>
            <input value="3124567890" readOnly />
          </div>
          <div className="card-campo">
            <label><FaIdCard /> Cédula</label>
            <input value="1070123456" readOnly />
          </div>
          <div className="card-campo">
            <label><FaBuilding /> Área</label>
            <input value="Infraestructura" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuarioCard;
