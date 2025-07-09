import React, { useState } from "react";
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
  FaShieldAlt,
  FaChartBar,
} from "react-icons/fa";
import "../estilos/EstiloFormularioIngresoEquipo.css";

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

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    setMensajeExito("✅ Equipo agregado exitosamente.");

    setTimeout(() => {
      setMensajeExito("");
      onClose();
    }, 1000);
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
            <label><FaChartBar /> Tarjeta Gráfica</label>
            <input type="text" placeholder="Ej. NVIDIA GTX 1650" required />
          </div>
          <div className="ingreso-equipo-campo ingreso-equipo-campo-fecha">
            <label><FaCalendarAlt /> Fecha de Ingreso</label>
            <input type="date" required />
          </div>
          <div className="ingreso-equipo-campo">
              <label><FaCheckCircle /> Estado</label>
              <select required>
                <option value="">Seleccione estado</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Archivo">Archivo</option>
              </select>
          </div>

        </form>

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
          <button type="button" className="ingreso-equipo-boton" onClick={handleSubmit}>
            Agregar Dispositivo
          </button>
        </div>

        {mensajeExito && (
          <div className="mensaje-exito-formulario-ingreso">
            <FaCheckCircle style={{ marginRight: "0.5rem" }} />
            {mensajeExito}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioIngresoEquipo;
