import React from "react";
import "../estilos/EstiloFormularioIngresoEquipo.css";

const FormularioIngresoEquipo: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="contenedor-formulario">
      {/* ✅ TÍTULO CENTRADO */}
      <h2 className="titulo-formulario">INGRESO DE EQUIPOS</h2>

      <form className="formulario-grid">
        {/* Inputs columna izquierda */}
        <div className="columna">
          <input type="text" placeholder="De serie" required />
=======
    <div className="contenedor-ingreso-equipo">
      <h2 className="titulo-ingreso-equipo">INGRESOS EQUIPOS</h2>

      <form className="formulario-ingreso-grid">
        <div className="columna-ingreso">
          <input type="text" placeholder="Serial" required />
>>>>>>> main
          <input type="text" placeholder="Marca" required />
          <input type="text" placeholder="Modelo" required />
          <input type="text" placeholder="Placa" required />
          <input type="text" placeholder="Procesador" required />
        </div>

<<<<<<< HEAD
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
=======
        <div className="columna-ingreso">
          <input type="number" placeholder="Ram ( GB )" required />
          <input type="number" placeholder="Nucleos" required />
          <input type="number" placeholder="Disco ( GB )" required />
          <input type="date" placeholder="Fecha Ingreso" required />
        </div>

        <div className="contenedor-boton-ingreso">
          <button type="submit" className="boton-agregar-equipo">
            Agregar Dispositivo
>>>>>>> main
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioIngresoEquipo;
