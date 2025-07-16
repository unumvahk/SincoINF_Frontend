// src/config/theme/palette.ts
// 🎨 Paleta de colores personalizada basada en identidad visual de SINCO
// Aplica a botones, textos, fondos, alerts y más, usando MUI Theme.
import type { PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
  mode: 'light',

  secondary: {
    main: '#00ADC9',         
    dark: '#0086A6',         
    light: '#D1F3FA',        
    contrastText: '#FFFFFF', 
  },

  success: {
    main: '#459d49',       
    dark: '#027A48',
    light: '#D1FADF',
    contrastText: '#FFFFFF',
  },
   
  info: {
    main: '#2E90FA',         
    dark: '#1570EF',
    light: '#EFF8FF',
    contrastText: '#FFFFFF',
  },

};

export default palette;
