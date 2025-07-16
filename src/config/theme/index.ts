// index.ts
// Este archivo combina todas las personalizaciones (colores, tipografía, componentes)
// en un único objeto de tema que se pasará al <ThemeProvider> de MUI.

import { createTheme } from '@mui/material/styles';
import palette from './palette';
import components from './components';

const theme = createTheme({
  palette,     
  components: components as any,   // Estilos globales de componentes
});

export default theme;
