import React from "react";
import "../estilos/EstiloFormularioIngresoEquipo.css";
 
const FormularioIngresoEquipo: React.FC = () => {
  return (
    <div className="contenedor-ingreso-equipo">
      <h2 className="titulo-ingreso-equipo">INGRESOS EQUIPOS</h2>
 
      <form className="formulario-ingreso-grid">
        {/* Columna izquierda */}
        <div className="columna-ingreso">
          <label>Serial</label>
          <input type="text" placeholder="Ingrese el serial" required />

          <label>Marca</label>
          <input type="text" placeholder="Ingrese la marca" required />

          <label>Modelo</label>
          <input type="text" placeholder="Ingrese el modelo" required />

          <label>Placa</label>
          <input type="text" placeholder="Ingrese la placa" required />

          <label>Procesador</label>
          <input type="text" placeholder="Ej. Intel Core i5" required />
        </div>
 
        <div className="columna-ingreso">
          <label>RAM (GB)</label>
          <input type="number" placeholder="Ej. 8" required />

          <label>Núcleos</label>
          <input type="number" placeholder="Ej. 4" required />

          <label>Disco Duro (GB)</label>
          <input type="number" placeholder="Ej. 512" required />

          <label>Fecha de Ingreso</label>
          <input type="date" required />
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