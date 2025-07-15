// index.ts
// Este archivo combina todas las personalizaciones (colores, tipografía, componentes)
// en un único objeto de tema que se pasará al <ThemeProvider> de MUI.

import { createTheme } from '@mui/material/styles';

// Importamos las personalizaciones individuales
import palette from './palette';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette,      // Colores personalizados
  typography,   // Tipografía personalizada
  components,   // Estilos globales de componentes
});

export default theme;
