// src/config/theme/palette.ts
// 🎨 Paleta de colores personalizada basada en identidad visual de SINCO
// Aplica a botones, textos, fondos, alerts y más, usando MUI Theme.

import type { PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
  mode: 'light',
  // 🟡 Aplica fondo claro general en toda la app (body/layout).

  // === 🔵 PRIMARIO: Azul corporativo principal (ej: botón Detalles) ===
  primary: {
    main: '#175CD3',         // 🔵 Azul fuerte y serio → botones principales
    dark: '#00A5C3',         // 🔵 Hover más intenso para destacar interacción
    light: '#E5EFFD',        // 🔵 Fondo suave para botones outlined u otros contenedores
    contrastText: '#FFFFFF', // ⚪ Texto blanco sobre azul para buena legibilidad
  },

  // === 🟦 SECUNDARIO: Azul celeste moderno (ej: botones secundarios) ===
  secondary: {
    main: '#00ADC9',         // 🟦 Celeste vivo y profesional
    dark: '#0086A6',         // 🟦 Hover más profundo (útil para botones)
    light: '#D1F3FA',        // 🟦 Suave para backgrounds o chips secundarios
    contrastText: '#FFFFFF', // ⚪ Texto blanco para botones celestes
  },

  // === 🔴 ERRORES: Para botones "Inactivar", alertas y validaciones ===
  error: {
    main: '#D92D20',         // 🔴 Rojo llamativo → acción destructiva
    dark: '#CC3D3D',         // 🔴 Hover más oscuro para feedback claro
    light: '#FEE4E2',        // 🔴 Fondo suave para alertas o chips
    contrastText: '#FFFFFF', // ⚪ Texto blanco sobre rojo
  },

  // === 🟠 ADVERTENCIA: Alertas de precaución o campos intermedios ===
  warning: {
    main: '#F79009',         // 🟠 Naranja vibrante
    dark: '#FCAA4D',
    light: '#FEF0C7',
    contrastText: '#000000', // ⚫ Texto oscuro para buena visibilidad
  },

  // === ✅ ÉXITO: Acciones completadas, badges o notificaciones exitosas ===
  success: {
    main: '#12B76A',         // ✅ Verde moderno para éxito
    dark: '#027A48',
    light: '#D1FADF',
    contrastText: '#FFFFFF',
  },

  // === ℹ️ INFORMACIÓN: Notificaciones neutrales o elementos destacados ===
  info: {
    main: '#2E90FA',         
    dark: '#1570EF',
    light: '#EFF8FF',
    contrastText: '#FFFFFF',
  },

  // === ⚙️ GRISES: Para backgrounds, borders, textos secundarios ===
  grey: {
    50:  '#F9FAFB', // fondo general
    100: '#F2F4F7', // fondo tarjetas
    200: '#E4E7EC',
    300: '#D0D5DD',
    400: '#98A2B3', // texto desactivado
    500: '#667085', // texto secundario
    600: '#475467',
    700: '#344054',
    800: '#1D2939',
    900: '#101828', // texto principal
  },

  // === 🧱 FONDOS ===
  background: {
    default: '#F9FAFB',   // ⚪ Fondo base de la app
    paper: '#EAEBEC',     // ⚪ Fondo de cards, tablas, modales
  },

  // === ✏️ TEXTOS ===
  text: {
    primary: '#101828',   // 🟤 Texto principal → títulos y contenido
    secondary: '#667085', // 🟤 Subtítulos, descripciones
    disabled: '#98A2B3',  // 🟤 Texto apagado o desactivado
  },

  // === ➖ DIVISORES ===
  divider: '#EAECF0',      // 🧾 Líneas entre cards, celdas, etc.
};

export default palette;
