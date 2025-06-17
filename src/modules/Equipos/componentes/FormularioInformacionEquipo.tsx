import React from 'react';

import '../estilos/FormularioInformcion.css.css'; // Si prefieres CSS tradicional

const FormularioInformacionEquipo: React.FC = () => {
  return (
    <div className="contenedor-formulario">
      <div className="tarjeta">
        <h2 className="titulo">Información del equipo</h2>
        <form className="grid-formulario">
          <div className="campo">
            <label htmlFor="serial">Serial</label>
            <input type="text" id="serial" placeholder="Ej: ABC123" />
          </div>

          <div className="campo">
            <label htmlFor="tipo">Tipo</label>
            <input type="text" id="tipo" placeholder="Ej: Portátil" />
          </div>

          <div className="campo">
            <label htmlFor="marca">Marca</label>
            <input type="text" id="marca" placeholder="Ej: Lenovo" />
          </div>

          <div className="campo">
            <label htmlFor="procesador">Procesador</label>
            <input type="text" id="procesador" placeholder="Ej: Intel i5" />
          </div>

          <div className="campo">
            <label htmlFor="ram">Memoria RAM</label>
            <input type="text" id="ram" placeholder="Ej: 8 GB" />
          </div>

          <div className="campo">
            <label htmlFor="disco">Disco</label>
            <input type="text" id="disco" placeholder="Ej: 512 GB SSD" />
          </div>

          <div className="campo">
            <label htmlFor="sistema">Sistema operativo</label>
            <input type="text" id="sistema" placeholder="Ej: Windows 10" />
          </div>

          <div className="campo">
            <label htmlFor="sede">Sede</label>
            <input type="text" id="sede" placeholder="Ej: Medellín" />
          </div>

          <div className="campo">
            <label htmlFor="ubicacion">Ubicación</label>
            <input type="text" id="ubicacion" placeholder="Ej: Oficina 2B" />
          </div>

          <div className="campo">
            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado" placeholder="Ej: Activo" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioInformacionEquipo;


