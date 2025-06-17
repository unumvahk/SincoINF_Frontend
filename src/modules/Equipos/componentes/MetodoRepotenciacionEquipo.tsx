import React, { useState } from 'react';
import '../estilos/MetodoRepotenciacion.css'; // Asegúrate de tener este archivo CSS

const MetodoRepotenciacionEquipo: React.FC = () => {
  const [metodo, setMetodo] = useState('RAM');
  const [cantidad, setCantidad] = useState('');

  return (
    <div className="caja-repotenciacion">
      <label className="titulo">Escoja el método de repotenciación:</label>
      
      <div className="selector-repotenciacion">
        <select
          value={metodo}
          onChange={(e) => setMetodo(e.target.value)}
        >
          <option value="RAM">RAM (GB)</option>
          <option value="DISCO">Disco (GB)</option>
        </select>

        <button className="boton-subir" title="Aplicar aumento">↑</button>
      </div>

      <div className="campo-aumento">
        <label>Cantidad a aumentar de {metodo}:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          placeholder={`Ej: 8 GB`}
        />
      </div>
    </div>
  );
};

export default MetodoRepotenciacionEquipo;
