import React, { useState } from "react";
import "../estilos/EstiloFormularioIngresoEquipo.css";
import {
  FaIdBadge,
  FaDesktop,
  FaBarcode,
  FaMicrochip,
  FaMemory,
  FaCog,
  FaHdd,
  FaCalendarAlt,
  FaCamera,
  FaTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";

interface Props {
  onClose: () => void;
}

const FormularioIngresoEquipo: React.FC<Props> = ({ onClose }) => {
  const [imagenEquipo, setImagenEquipo] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [mensajeExito, setMensajeExito] = useState("");

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagenEquipo(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const quitarImagen = () => {
    setImagenEquipo(null);
    setPreviewURL(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensajeExito("Equipo agregado exitosamente.");
    setTimeout(() => setMensajeExito(""), 3000);
  };

  return (
    <div className="ingreso-equipo-modal-overlay">
      <div className="ingreso-equipo-modal">
        <button className="ingreso-equipo-cerrar" onClick={onClose}>✕</button>
        <h2 className="ingreso-equipo-titulo">Ingreso de Equipos</h2>

        <form className="ingreso-equipo-form-grid" onSubmit={handleSubmit}>
          <div className="ingreso-equipo-campo">
            <label><FaIdBadge /> Serial</label>
            <input type="text" placeholder="Ingrese el serial" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaDesktop /> Marca</label>
            <input type="text" placeholder="Ingrese la marca" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaBarcode /> Modelo</label>
            <input type="text" placeholder="Ingrese el modelo" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaBarcode /> Placa</label>
            <input type="text" placeholder="Ingrese la placa" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaMicrochip /> Procesador</label>
            <input type="text" placeholder="Ej. Intel Core i5" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaMemory /> RAM (GB)</label>
            <input type="number" placeholder="Ej. 8" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaCog /> Núcleos</label>
            <input type="number" placeholder="Ej. 4" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaHdd /> Disco Duro (GB)</label>
            <input type="number" placeholder="Ej. 512" required />
          </div>
          <div className="ingreso-equipo-campo">
            <label><FaCalendarAlt /> Fecha de Ingreso</label>
            <input type="date" required />
          </div>

          <div className="ingreso-equipo-imagen-seccion">
            <label><FaCamera /> Foto del equipo</label>
            <input type="file" accept="image/*" onChange={handleImagenChange} />
            {previewURL && (
              <div className="preview-imagen">
                <img src={previewURL} alt="Vista previa" />
                <button type="button" onClick={quitarImagen}>
                  <FaTimesCircle /> Quitar imagen
                </button>
              </div>
            )}
          </div>

          <div className="ingreso-equipo-boton-contenedor">
            <button type="submit" className="ingreso-equipo-boton">
              ✅ Agregar Dispositivo
            </button>
          </div>
        </form>

        {mensajeExito && (
          <div className="toast-exito">
            <FaCheckCircle className="icono-exito" />
            {mensajeExito}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioIngresoEquipo;
