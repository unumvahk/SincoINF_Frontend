import React, { useState } from 'react';
import '../estilos/MetodoRepotenciacion.css';

const MetodoRepotenciacionEquipo: React.FC = () => {
  const [metodo, setMetodo] = useState('RAM');
  const [cantidad, setCantidad] = useState('');

  return (
    <div>
      <h3 className="titulo-repotenciacion">
        🛠 <span>Método de Repotenciación</span>
      </h3>

      <label className="label-repotenciacion">Seleccione el componente:</label>
      <div className="selector-repotenciacion">
        <select
          value={metodo}
          onChange={(e) => setMetodo(e.target.value)}
          className="select-repotenciacion"
        >
          <option value="RAM">💻 RAM (GB)</option>
          <option value="DISCO">💾 Disco (GB)</option>
        </select>

        <button className="boton-subir-repotenciacion" title="Aplicar aumento">↑</button>
      </div>

      <div className="campo-aumento-repotenciacion">
        <label className="label-repotenciacion">Cantidad a aumentar:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          placeholder="Ej: 8"
          className="input-repotenciacion"
        />
        <span className="unidad-repotenciacion">{metodo === "RAM" ? "GB RAM" : "GB Disco"}</span>
      </div>
    </div>
  );
};

export default MetodoRepotenciacionEquipo;
