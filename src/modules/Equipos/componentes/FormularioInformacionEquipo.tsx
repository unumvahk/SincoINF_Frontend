import React from 'react';
<<<<<<< HEAD

import '../estilos/FormularioInformcion.css.css'; 
=======
import '../estilos/FormularioInformcion.css'; // Cambia el nombre del archivo también
>>>>>>> main

const FormularioInformacionEquipo: React.FC = () => {
  return (
      <div className="tarjeta-infoequipo">
        <h2 className="titulo-infoequipo">Información del equipo</h2>
        <form className="grid-infoequipo">
          {[
            ['serial', 'Serial', 'Ej: ABC123'],
            ['tipo', 'Tipo', 'Ej: Portátil'],
            ['marca', 'Marca', 'Ej: Lenovo'],
            ['procesador', 'Procesador', 'Ej: Intel i5'],
            ['ram', 'Memoria RAM', 'Ej: 8 GB'],
            ['disco', 'Disco', 'Ej: 512 GB SSD'],
            ['sistema', 'Sistema operativo', 'Ej: Windows 10'],
            ['sede', 'Sede', 'Ej: Medellín'],
            ['ubicacion', 'Ubicación', 'Ej: Oficina 2B'],
            ['estado', 'Estado', 'Ej: Activo']
          ].map(([id, label, placeholder]) => (
            <div className="campo-infoequipo" key={id}>
              <label htmlFor={id}>{label}</label>
              <input type="text" id={id} placeholder={placeholder} />
            </div>
          ))}
        </form>
      </div>
  );
};

export default FormularioInformacionEquipo;
