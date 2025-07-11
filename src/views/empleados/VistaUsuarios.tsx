import React, { useState } from 'react';

import FormularioRegistroUsuario from '../../feature/empleados/form_registro_empleado/RegistroUsuario';
import ModalDetalleUsuario from '../../feature/empleados/detalles_de_usuario/DetallesUsuario';
import ModalEditarUsuario from '../../feature/empleados/editar_usuario/EditarUsuario';
import ModalInactivarUsuario from '../../feature/empleados/confirmar_inactivar/InactivarUsuario';
import TablaUsuarios from '../../feature/empleados/tabla_empleados/TablaUsuarios';
 
const VistaUsuarios: React.FC = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<any | null>(null);
  const [modoModal, setModoModal] = useState<'detalle' | 'editar' | 'inactivar' | null>(null);
 
  const cerrarModales = () => {
    setUsuarioSeleccionado(null);
    setModoModal(null);
  };
 
  const handleGuardarEdicion = (area: string, rol: string) => {
    console.log('Cambios guardados:', { area, rol });
    // Aquí puedes actualizar el usuario o llamar al backend
    cerrarModales();
  };
 
  return (
 
      <div className="usuarios-vista-contenedor">
        <TablaUsuarios
          onAgregarUsuario={() => setMostrarFormulario(true)}
          onSeleccionarUsuario={(usuario) => {
            setUsuarioSeleccionado(usuario);
            setModoModal('detalle');
          }}
          onEditarUsuario={(usuario) => {
            setUsuarioSeleccionado(usuario);
            setModoModal('editar');
          }}
          onInactivarUsuario={(usuario) => {
            setUsuarioSeleccionado(usuario);
            setModoModal('inactivar');
          }}
        />
 
        {mostrarFormulario && (
          <FormularioRegistroUsuario onClose={() => setMostrarFormulario(false)} />
        )}
 
        {modoModal === 'detalle' && usuarioSeleccionado && (
          <ModalDetalleUsuario usuario={usuarioSeleccionado} onClose={cerrarModales} />
        )}
 
        {modoModal === 'editar' && usuarioSeleccionado && (
          <ModalEditarUsuario
            usuario={usuarioSeleccionado}
            onClose={cerrarModales}
            onGuardar={handleGuardarEdicion}
          />
        )}
 
        {modoModal === 'inactivar' && usuarioSeleccionado && (
          <ModalInactivarUsuario usuario={usuarioSeleccionado} onClose={cerrarModales} />
        )}
      </div>
 
  );
};
 
export default VistaUsuarios;
 
 