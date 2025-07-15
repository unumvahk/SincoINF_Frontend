// components.ts
// Este archivo permite sobrescribir los estilos por defecto de componentes de MUI.
// Aquí puedes definir cómo lucen botones, inputs, tooltips, etc., de forma global.

import type { Components } from '@mui/material/styles';

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',     // Bordes redondeados para todos los botones
        textTransform: 'none',   // Evita que el texto se convierta a mayúsculas automáticamente
      },
    },
  },
  // Puedes agregar más componentes aquí, por ejemplo:
  // MuiTextField, MuiCard, MuiAppBar, etc.
};

export default components;
