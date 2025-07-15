// src/views/pruebas/VistaColores.tsx

// Importamos los componentes necesarios de MUI
import { Box, Typography, Button, Paper, Divider, Stack } from '@mui/material';

// Esta vista sirve para visualizar cómo se aplican los colores del theme global
const VistaColores = () => {
  return (
    // Box principal que usa el fondo general definido en el theme
    <Box p={4} bgcolor="background.default">
      
      {/* Título principal con el color de texto fuerte (palette.text.primary) */}
      <Typography variant="h4" color="text.primary" gutterBottom>
        Paleta de colores - SincoINF
      </Typography>

      {/* Texto complementario con color secundario (palette.text.secondary) */}
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Estos son los colores base definidos en el theme.
      </Typography>

      {/* Línea divisoria con color definido en palette.divider */}
      <Divider sx={{ my: 3 }} />

      {/* Stack para organizar botones horizontalmente con espacio entre ellos */}
      <Stack spacing={2} direction="row" flexWrap="wrap">
        {/* Ejemplos de todos los colores del theme aplicados a botones */}

        {/* color="primary" → usa palette.primary.main */}
        <Button variant="contained" color="primary">
          Primario
        </Button>

        {/* Botón outline con el mismo color primario */}
        <Button variant="outlined" color="primary">
          Primario (outline)
        </Button>

        {/* color="secondary" → usa palette.secondary.main */}
        <Button variant="contained" color="secondary">
          Secundario
        </Button>

        <Button variant="outlined" color="secondary">
          Secundario (outline)
        </Button>

        {/* color="error" → rojo de error */}
        <Button variant="contained" color="error">
          Error
        </Button>

        <Button variant="outlined" color="error">
          Error (outline)
        </Button>

        {/* color="warning" → naranja de advertencia */}
        <Button variant="contained" color="warning">
          Advertencia
        </Button>

        <Button variant="outlined" color="warning">
          Advertencia (outline)
        </Button>

        {/* color="success" → verde para acciones exitosas */}
        <Button variant="contained" color="success">
          Éxito
        </Button>

        <Button variant="outlined" color="success">
          Éxito (outline)
        </Button>

        {/* color="info" → azul claro para mensajes informativos */}
        <Button variant="contained" color="info">
          Info
        </Button>

        <Button variant="outlined" color="info">
          Info (outline)
        </Button>
      </Stack>

      {/* Otra división visual entre secciones */}
      <Divider sx={{ my: 4 }} />

      {/* Fondo de ejemplo usando background.paper (tarjetas, paneles, modales) */}
      <Typography variant="h6" color="text.primary" gutterBottom>
        Fondos
      </Typography>

      <Paper sx={{ p: 2, bgcolor: 'background.paper', mb: 2 }} elevation={2}>
        Fondo de <b>Paper</b> (background.paper)
      </Paper>

      {/* Fondo alternativo usando grey.100 de la paleta de grises de MUI */}
      <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
        Fondo gris suave (grey.100)
      </Box>

      {/* División antes de los ejemplos de texto */}
      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" color="text.primary" gutterBottom>
        Colores de texto
      </Typography>

      {/* Diferentes colores de texto definidos en palette.text */}
      <Typography color="text.primary">Texto primario</Typography>
      <Typography color="text.secondary">Texto secundario</Typography>
      <Typography color="text.disabled">Texto deshabilitado</Typography>

      <Divider sx={{ my: 4 }} />

      {/* Divider final con una explicación visual */}
      <Typography variant="h6" gutterBottom>
        Divider
      </Typography>

      <Divider />
      <Typography variant="body2" sx={{ mt: 1 }}>
        Línea divisoria (divider del theme)
      </Typography>
    </Box>
  );
};

export default VistaColores;
