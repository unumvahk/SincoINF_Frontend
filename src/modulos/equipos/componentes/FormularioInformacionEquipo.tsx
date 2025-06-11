import React from 'react';

const FormularioInformacionEquipo: React.FC = () => {
  return (
    <div className="formulario-equipo">
      <h2>Información del Equipo</h2>
      <form className="formulario-grid">
        <input type="text" placeholder="Serial" />
        <input type="text" placeholder="Marca" />
        <input type="text" placeholder="Modelo" />
        <input type="text" placeholder="Placa" />
        <input type="text" placeholder="Disco (GB)" />
        <input type="text" placeholder="Procesador" />
        <input type="text" placeholder="RAM (GB)" />
        <input type="text" placeholder="Núcleos" />
        <input type="text" placeholder="Área" />
        <input type="text" placeholder="Ubicación" />
        <input type="date" />
      </form>
    </div>
  );
};

export default FormularioInformacionEquipo;
