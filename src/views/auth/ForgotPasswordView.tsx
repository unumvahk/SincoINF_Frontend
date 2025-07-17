import { Box, Button, Container, Paper, TextField, Typography, Link, Alert, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link as RouterLink } from "react-router-dom";
import { sendPasswordResetEmail } from "../../lib/api";
import { useState } from "react";

const ForgotPasswordView = () => {
  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError
  } = useMutation({
    mutationFn: sendPasswordResetEmail
  });

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordReset(email);
  }

  return (
    <Container 
      maxWidth='sm'
      sx={{ 
        height: '92vh' ,
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
          alignItems: "center",
          gap: 2,
          p: 4,
          borderRadius: 3,
        }}
      >
        {
          isError && <Alert severity="error">Se ha ocacionado un error.</Alert>
        }

        <Typography variant="h6" align="center">
          Cambia tu contraseña
        </Typography>

        {
          isSuccess ? 
          (
            <Alert severity="success">El email ha sido enviado! Revisa tu bandeja de entrada y sigue las intrucciones.</Alert>
          ) : 
          (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                size="small"
                fullWidth
                placeholder="Ingrese su correo aquí"
                label='Email'
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1 }}
                disabled={!email}
              >
                {
                  isPending ? <CircularProgress size='24px' color="inherit"/> : 'Cambiar Contraseña'
                }
              </Button>
            </form>
          )
        }

        <Box textAlign='center' mt={1}>
          <Typography variant="body2">
            Volver al <Link component={RouterLink} to='/login' replace underline="none">Login</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default ForgotPasswordView;