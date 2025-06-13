import React from 'react';
import '../estilos/FormularioInformcion.css.css'; // Si prefieres CSS tradicional

const FormularioInformacionEquipo: React.FC = () => {
  return (
    <div className="contenedor-formulario">
      <div className="tarjeta">
        <h2 className="titulo">Información del Equipo</h2>
        <form className="grid-formulario">
          <div className="campo">
            <label htmlFor="serial">Serial</label>
            <input id="serial" type="text" placeholder="Serial" />
          </div>
          <div className="campo">
            <label htmlFor="marca">Marca</label>
            <input id="marca" type="text" placeholder="Marca" />
          </div>
          <div className="campo">
            <label htmlFor="modelo">Modelo</label>
            <input id="modelo" type="text" placeholder="Modelo" />
          </div>
          <div className="campo">
            <label htmlFor="placa">Placa</label>
            <input id="placa" type="text" placeholder="Placa" />
          </div>
          <div className="campo">
            <label htmlFor="disco">Disco (GB)</label>
            <input id="disco" type="text" placeholder="Disco (GB)" />
          </div>
          <div className="campo">
            <label htmlFor="procesador">Procesador</label>
            <input id="procesador" type="text" placeholder="Procesador" />
          </div>
          <div className="campo">
            <label htmlFor="ram">RAM (GB)</label>
            <input id="ram" type="text" placeholder="RAM (GB)" />
          </div>
          <div className="campo">
            <label htmlFor="nucleos">Núcleos</label>
            <input id="nucleos" type="text" placeholder="Núcleos" />
          </div>
          <div className="campo">
            <label htmlFor="area">Área</label>
            <input id="area" type="text" placeholder="Área" />
          </div>
          <div className="campo">
            <label htmlFor="ubicacion">Ubicación</label>
            <input id="ubicacion" type="text" placeholder="Ubicación" />
          </div>
          <div className="campo">
            <label htmlFor="fecha">Fecha de Registro</label>
            <input id="fecha" type="date" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default FormularioInformacionEquipo;
