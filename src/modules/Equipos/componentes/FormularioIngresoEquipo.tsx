import React from "react";
import "../estilos/EstiloFormularioIngresoEquipo.css";

const FormularioIngresoEquipo: React.FC = () => {
  return (
    <div className="contenedor-formulario">
      {/* ✅ TÍTULO CENTRADO */}
      <h2 className="titulo-formulario">INGRESO DE EQUIPOS</h2>

      <form className="formulario-grid">
        {/* Inputs columna izquierda */}
        <div className="columna">
          <input type="text" placeholder="De serie" required />
          <input type="text" placeholder="Marca" required />
          <input type="text" placeholder="Modelo" required />
          <input type="text" placeholder="Placa" required />
          <input type="text" placeholder="Procesador" required />
        </div>

        {/* Inputs columna derecha */}
        <div className="columna">
          <input type="number" placeholder="RAM (GB)" required />
          <input type="number" placeholder="Núcleos" required />
          <input type="number" placeholder="Disco (GB)" required />
          <input type="date" required />
        </div>

        {/* Botón final */}
        <div className="contenedor-boton">
          <button type="submit" className="boton-agregar">
            Agregar dispositivo
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioIngresoEquipo;
