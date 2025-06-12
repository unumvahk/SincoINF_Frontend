import React from 'react';

const MetodoRepotenciacionEquipo: React.FC = () => {
  return (
    <div className="metodo-repotenciacion">
      <label>Escoja el método de repotenciación:</label>
      <div className="selector-repotenciacion">
        <select>
          <option>RAM (GB)</option>
          <option>Disco (GB)</option>
        </select>
        <button>↑</button>
      </div>
    </div>
  );
};

export default MetodoRepotenciacionEquipo;
