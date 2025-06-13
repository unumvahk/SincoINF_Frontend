// src/modulos/equipos/componentes/FormularioIngresoEquipo.tsx

import React from "react";
import "../estilos/EstiloFormularioIngresoEquipo.css"; // Estilos CSS específicos

const FormularioIngresoEquipo: React.FC = () => {
  return (
    <div className="contenedor-formulario">
      {/* Título principal */}
      <h2 className="titulo-formulario">INGRESOS EQUIPOS</h2>

      {/* Formulario en columnas */}
      <form className="formulario-grid">
        {/* Primera columna */}
        <div className="columna">
          <input type="text" placeholder="Serial" required />
          <input type="text" placeholder="Marca" required />
          <input type="text" placeholder="Modelo" required />
          <input type="text" placeholder="Placa" required />
          <input type="text" placeholder="Procesador" required />
        </div>

        {/* Segunda columna */}
        <div className="columna">
          <input type="number" placeholder="Ram ( GB )" required />
          <input type="number" placeholder="Nucleos" required />
          <input type="number" placeholder="Disco ( GB )" required />
          <input type="date" placeholder="Fecha Ingreso" required />
        </div>

        {/* Botón de envío */}
        <div className="contenedor-boton">
          <button type="submit" className="boton-agregar">
            Agregar Dispositivo
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioIngresoEquipo;
