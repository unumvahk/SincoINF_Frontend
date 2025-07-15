import { Alert, Container, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../../feature/auth/ResetPasswordForm";

const ResetPasswordView = () => {
  const [searchParams ] = useSearchParams();
  const code = Number(searchParams.get('code'));
  const exp = Number(searchParams.get('exp'));
  const now = Date.now();

  const linkIsValid = code && exp && exp > now;

  return (
    <Container  
      maxWidth='sm'
      sx={{ 
        height: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4
        }}
      >
        {
          linkIsValid ?
          (
            <ResetPasswordForm code={code} />
          ) :
          (
            <>
              <Alert severity="error">El link ha espirado o es invalido.</Alert>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Volver a generar un <Link component={RouterLink} to='/password/forgot' underline="none">link nuevo</Link>
              </Typography>
            </>
          )
        }
      </Paper>
    </Container>
  )
}

export default ResetPasswordView
