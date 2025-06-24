import React from "react";
import "../estilos/EstiloFormularioIngresoEquipo.css";

const FormularioIngresoEquipo: React.FC = () => {
  return (
    <div className="contenedor-ingreso-equipo">
      <h2 className="titulo-ingreso-equipo">INGRESOS EQUIPOS</h2>

      <form className="formulario-ingreso-grid">
        <div className="columna-ingreso">
          <input type="text" placeholder="Serial" required />
          <input type="text" placeholder="Marca" required />
          <input type="text" placeholder="Modelo" required />
          <input type="text" placeholder="Placa" required />
          <input type="text" placeholder="Procesador" required />
        </div>

        <div className="columna-ingreso">
          <input type="number" placeholder="Ram ( GB )" required />
          <input type="number" placeholder="Nucleos" required />
          <input type="number" placeholder="Disco ( GB )" required />
          <input type="date" placeholder="Fecha Ingreso" required />
        </div>

        <div className="contenedor-boton-ingreso">
          <button type="submit" className="boton-agregar-equipo">
            Agregar Dispositivo
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioIngresoEquipo;
