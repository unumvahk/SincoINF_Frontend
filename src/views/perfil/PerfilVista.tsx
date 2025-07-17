import { Container } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

const PerfilVista: React.FC = () => {
  return (
    <Container
      maxWidth='sm'
      sx={{
        bgcolor: purple[400],
        height: '92vh',
      }}
    >

    </Container>
  );
};

export default PerfilVista;
