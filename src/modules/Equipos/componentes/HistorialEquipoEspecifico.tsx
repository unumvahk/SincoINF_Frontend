import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react'; // Puedes usar lucide-react o fontawesome
import '../estilos/HistorialMaquina.css';

const HistorialMaquina: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [fechaFiltro, setFechaFiltro] = useState('');
  const historial = [
    { fecha: '2025-06-10', descripcion: 'Cambio de disco duro a SSD 500GB' },
    { fecha: '2025-05-20', descripcion: 'Mantenimiento general y limpieza' },
    { fecha: '2025-04-15', descripcion: 'Actualización de RAM a 16GB' },
    { fecha: '2025-03-01', descripcion: 'Cambio de ubicación: Oficina 3 → Oficina 5' },
  ];

  const historialFiltrado = historial.filter(item =>
    item.descripcion.toLowerCase().includes(busqueda.toLowerCase()) &&
    (!fechaFiltro || item.fecha === fechaFiltro)
  );

  return (
    <div className="contenedor-historial">
      <h3>Historial de la Máquina</h3>
      <div className="busqueda-historial">
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <input
          type="date"
          value={fechaFiltro}
          onChange={(e) => setFechaFiltro(e.target.value)}
        />
      </div>
      <ul className="lista-historial">
        {historialFiltrado.length > 0 ? (
          historialFiltrado.map((item, index) => (
            <li className="historial-caja" key={index}>
              <div className="historial-icono">
                <CalendarDays size={18} />
                <span>{item.fecha}</span>
              </div>
              <div className="historial-descripcion">
                
                <p>{item.descripcion}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="vacio">No hay resultados</li>
        )}
      </ul>
    </div>
  );
};

export default HistorialMaquina;
