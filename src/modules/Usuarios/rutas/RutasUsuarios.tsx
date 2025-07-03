import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VistaUsuarios from '../vistas/VistaUsuarios';


const RutasUsuarios: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<VistaUsuarios/>} />
    </Routes>
  );
};

export default RutasUsuarios;
