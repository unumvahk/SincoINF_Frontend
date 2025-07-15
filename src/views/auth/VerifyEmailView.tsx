import { Alert, Button, Container, Paper, Typography, CircularProgress } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { verifyEmail } from '../../lib/api';

const VerifyEmailView = () => {
  const { code } = useParams();
  const { isPending, isSuccess, isError } = useQuery({
    queryKey:["emailVerification", code],
    queryFn: () => verifyEmail(Number(code))
  });

  return (
    <Container 
      maxWidth="md"
      sx={{
        height: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          width: 450,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper', 
          p: 4, 
          borderRadius: 2, 
          boxShadow: 3 
        }}
      >
        {
          isPending ? (
            <CircularProgress />
          ) : isSuccess ? (
            <Alert severity='success'>Email verificado</Alert>
          ) : (
            <Alert severity='error'>Link inválido</Alert>
          )
        }

        <img src="/email-image.png" alt="email-image" width={'200px'} height={'200px'}/>

        {
          isError ? 
          (
            <Typography variant='body2'>El link es invalido o ha expirado.</Typography>
          ) : (
            <Typography variant='body2'>El correo se ha verificado correctamente.</Typography>
          )
        }

        <Button 
          component={Link}
          to={'/login'}
          replace
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
          }}
        >
          Volver atrás
        </Button>
      </Paper>
    </Container>
  )
}

export default VerifyEmailView;